import { Eyebrow, Reveal, Pill } from "./Atoms";
import { FounderCarousel } from "./FounderCarousel";

export function QuienesSomos() {
  return (
    <section id="nosotros" className="section qs" data-screen-label="03 Quiénes somos">
      <div className="shell">
        <Eyebrow num="03">Quiénes somos · El estudio</Eyebrow>
        <div className="qs-head">
          <Reveal>
            <h2 className="services-h">
              Un estudio<br />
              <span className="b">fundado en Chile<span style={{ color: "var(--upz-tomato)" }}>.</span></span>
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="qs-intro">
              <p>
                UPZITES es un estudio de diseño y desarrollo digital fundado en
                Chile. Nacimos para ayudar a marcas, emprendedores y empresas a
                transformar su presencia digital con sitios web modernos,
                funcionales y orientados a resultados.
              </p>
              <p>
                Combinamos branding estratégico, diseño UX/UI y desarrollo de
                alto rendimiento bajo una sola dirección creativa. No entregamos
                archivos y desaparecemos: trabajamos como tu equipo digital, con
                criterio, sistema y obsesión por el detalle. Diseño con sangre,
                sistema y dirección — tropical underground.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="qs-founder">
          <Reveal>
            <FounderCarousel />
          </Reveal>
          <Reveal delay={120}>
            <div className="qs-bio">
              <span className="qs-bio-eyebrow">El founder</span>
              <h3 className="qs-bio-name">José Manuel Rodríguez</h3>
              <p className="qs-bio-role">
                Founder &amp; CEO de UPZITES · Desarrollador Full Stack &amp; Diseñador Web
              </p>
              <p>
                Ayudo a marcas, emprendedores y empresas a transformar su
                presencia digital a través de sitios web modernos, funcionales y
                orientados a resultados.
              </p>
              <p>
                Como fundador de UPZITES, combino desarrollo web, diseño
                estratégico y visión de negocio para crear experiencias digitales
                que no solo se ven bien, sino que también comunican, convierten y
                escalan.
              </p>
              <p>
                Mi diferencial está en unir pensamiento de ingeniería, criterio
                visual y ejecución técnica para construir soluciones digitales
                claras, eficientes y alineadas con objetivos reales.
              </p>
              <div className="intro-tags" style={{ marginTop: 20 }}>
                <Pill dot>Full Stack</Pill>
                <Pill dot>Diseño UX/UI</Pill>
                <Pill dot>Visión de negocio</Pill>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
