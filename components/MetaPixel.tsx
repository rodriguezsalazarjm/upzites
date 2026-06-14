"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

const CONSENT_KEY = "upz-cookies";
const CONSENT_EVENT = "upz-cookie-consent";
const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || "1009533758712390";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    _fbq?: (...args: unknown[]) => void;
  }
}

export function MetaPixel() {
  const [consentGranted, setConsentGranted] = useState(false);
  const [scriptReady, setScriptReady] = useState(false);
  const [pageViewSent, setPageViewSent] = useState(false);

  useEffect(() => {
    function syncConsent() {
      try {
        setConsentGranted(localStorage.getItem(CONSENT_KEY) === "accepted");
      } catch {
        setConsentGranted(false);
      }
    }

    syncConsent();
    window.addEventListener(CONSENT_EVENT, syncConsent);
    window.addEventListener("storage", syncConsent);

    return () => {
      window.removeEventListener(CONSENT_EVENT, syncConsent);
      window.removeEventListener("storage", syncConsent);
    };
  }, []);

  useEffect(() => {
    if (!scriptReady || !window.fbq) return;

    window.fbq("consent", consentGranted ? "grant" : "revoke");

    if (consentGranted && !pageViewSent) {
      window.fbq("track", "PageView");
      setPageViewSent(true);
    }

    if (!consentGranted && pageViewSent) {
      setPageViewSent(false);
    }
  }, [consentGranted, pageViewSent, scriptReady]);

  if (!pixelId) return null;

  return (
    <Script id="meta-pixel" strategy="afterInteractive" onReady={() => setScriptReady(true)}>
      {`
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('consent', 'revoke');
        fbq('init', '${pixelId}');
      `}
    </Script>
  );
}
