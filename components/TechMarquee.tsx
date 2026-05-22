import React from "react";

/* White PNG logos in /public/images/stack — monochrome stack marquee */
const STACK: { name: string; src: string }[] = [
  { name: "Figma", src: "/images/stack/figma.png" },
  { name: "Adobe", src: "/images/stack/adobe.png" },
  { name: "Photoshop", src: "/images/stack/adobephotoshop.png" },
  { name: "Illustrator", src: "/images/stack/adobeillustrator.png" },
  { name: "Canva", src: "/images/stack/canva.png" },
  { name: "React", src: "/images/stack/react.png" },
  { name: "Next.js", src: "/images/stack/nextdotjs.png" },
  { name: "Node.js", src: "/images/stack/nodedotjs.png" },
  { name: "NestJS", src: "/images/stack/nestjs.png" },
  { name: "JavaScript", src: "/images/stack/javascript.png" },
  { name: "TypeScript", src: "/images/stack/typescript.png" },
  { name: "HTML5", src: "/images/stack/html5.png" },
  { name: "CSS3", src: "/images/stack/css.png" },
  { name: "Tailwind", src: "/images/stack/tailwindcss.png" },
  { name: "Flutter", src: "/images/stack/flutter.png" },
  { name: "Framer", src: "/images/stack/framer.png" },
  { name: "Webflow", src: "/images/stack/webflow.png" },
  { name: "WordPress", src: "/images/stack/wordpress.png" },
  { name: "Shopify", src: "/images/stack/shopify.png" },
  { name: "WooCommerce", src: "/images/stack/woocommerce.png" },
  { name: "Google", src: "/images/stack/google.png" },
  { name: "GitHub", src: "/images/stack/github.png" },
  { name: "ChatGPT", src: "/images/stack/chatgpt.png" },
  { name: "Gemini", src: "/images/stack/gemini.png" },
  { name: "Sora", src: "/images/stack/sora.png" },
  { name: "Maze", src: "/images/stack/maze.png" },
];

export function TechMarquee() {
  const loop = [...STACK, ...STACK];
  return (
    <section className="tech-marquee" data-screen-label="Tech Marquee" aria-label="Stack tecnológico">
      <div className="tech-marquee-track">
        {loop.map((item, i) => (
          <React.Fragment key={i}>
            <span className="tech-logo" title={item.name}>
              <img src={item.src} alt={item.name} loading="lazy" />
            </span>
            <span className="tech-marquee-sep" aria-hidden="true">●</span>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
