"use client";

import { useEffect, useState } from "react";

const KEY = "upz-cookies";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* ignore */
    }
  }, []);

  function decide(value: "accepted" | "rejected") {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* ignore */
    }
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="cookie glass" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-text">
        <strong>Usamos cookies</strong>
        <span>
          Las usamos para mejorar tu experiencia y entender cómo se usa el sitio.
        </span>
      </div>
      <div className="cookie-actions">
        <button type="button" className="btn btn-ivory btn-sm" onClick={() => decide("rejected")}>
          Rechazar
        </button>
        <button type="button" className="btn btn-dark btn-sm" onClick={() => decide("accepted")}>
          Aceptar
        </button>
      </div>
    </div>
  );
}
