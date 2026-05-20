"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), reduce ? 900 : 2200);
    return () => clearTimeout(t);
  }, [reduce]);

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
        <motion.div
          className="preloader-inner"
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.92, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <img src="/images/upzites-logo.png" alt="UPZITES" className="preloader-logo" />
          <div className="preloader-bar">
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: reduce ? 0.7 : 1.6, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      )}
    </div>
  );
}
