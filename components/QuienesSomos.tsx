import Link from "next/link";
import { Eyebrow, Reveal, Pill } from "./Atoms";
import { FounderCarousel } from "./FounderCarousel";

export function QuienesSomos() {
  return (
    <section id="nosotros" className="section qs" data-screen-label="03 Quiénes somos">
      <div className="shell">
        <Eyebrow num="03">Quiénes somos · El estudio</Eyebrow>
        <div className="qs-founder">
          <Reveal>
            <FounderCarousel />
          </Reveal>
          <Reveal delay={120}>
            <div className="qs-bio">
              <h2 className="services-h" style={{ fontSize: "clamp(28px, 3.4vw, 52px)", margin: "0 0 18px" }}>
                No hacemos marcas bonitas.<br />
                <span className="b">Marcas con dirección<span style={{ color: "var(--upz-tomato)" }}>.</span></span>
              </h2>
              <p style={{ fontFamily: "var(--font-text)", fontSize: 17, lineHeight: 1.6, color: "var(--fg-2)", margin: 0 }}>
                UPZITES es un estudio de estrategia digital, branding y UX/UI para
                marcas que quieren verse más fuertes, claras y competitivas.
                Combinamos estrategia, diseño bold y cultura visual tropical
                underground. Desde <strong>Santiago de Chile</strong>, con raíces
                caraqueñas.
              </p>
              <div className="intro-tags" style={{ marginTop: 20 }}>
                <Pill dot>Estrategia</Pill>
                <Pill dot>Sistema</Pill>
                <Pill dot>Carácter</Pill>
              </div>
              <p className="qs-founder-credit">
                Fundado por <strong>José Manuel Rodríguez</strong> · Founder &amp; CEO
              </p>
              <div className="hero-actions" style={{ marginTop: 22 }}>
                <Link href="/nosotros" className="btn btn-dark btn-lg">Saber más <span className="arr">↗</span></Link>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
