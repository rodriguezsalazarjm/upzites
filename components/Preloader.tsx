"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setLoading(false), reduce ? 800 : 2400);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!loading) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [loading]);

  return (
    <div className={`preloader${loading ? "" : " is-done"}`} aria-hidden={!loading}>
      {mounted && (
        <div className="preloader-stage">
          <img src="/images/upzites-white.png" alt="UPZITES" className="preloader-logo" />
          <div className="preloader-bar"><span /></div>
        </div>
      )}
    </div>
  );
}
