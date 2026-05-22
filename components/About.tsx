// components/About.tsx
"use client";
import { useState } from "react";

const valores = [
  { num: "01", name: "Honestidad",      desc: "Actuamos con transparencia y rectitud en cada operación aduanera." },
  { num: "02", name: "Responsabilidad", desc: "Cumplimos nuestros compromisos con puntualidad y seriedad." },
  { num: "03", name: "Integridad",      desc: "Mantenemos principios éticos sólidos en todo momento." },
  { num: "04", name: "Eficiencia",      desc: "Optimizamos cada proceso para entregar resultados rápidos y precisos." },
];

export default function About() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [active, setActive]   = useState<number | null>(null);

  const isOpen = (i: number) => active === i || (hovered === i && active === null);

  return (
    <section id="nosotros">
      <div className="section-inner">
        <span className="section-label">Quiénes Somos</span>
        <h2 className="section-title">BIRLCOMEX SRL</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Somos una empresa boliviana especializada en despacho aduanero e
          importaciones internacionales, con un equipo comprometido con la
          eficiencia y la transparencia en cada operación.
        </p>

        {/* Grid principal: izquierda misión/visión | derecha valores */}
        <div className="about-grid">

          {/* Columna izquierda */}
          <div className="about-mv">
            <div className="about-card">
              <h3>Misión</h3>
              <p>
                Brindar servicios de despacho aduanero con transparencia,
                precisión y responsabilidad, siendo un aliado confiable y digno
                representante de la normativa de la Aduana Nacional, garantizando
                operaciones seguras y oportunas para nuestros clientes.
              </p>
            </div>
            <div className="about-card">
              <h3>Visión</h3>
              <p>
                Ser una agencia despachante líder en Bolivia, reconocida por su
                transparencia, integridad y excelencia, consolidándonos como un
                referente digno del cumplimiento y la correcta gestión ante la
                Aduana Nacional.
              </p>
            </div>
          </div>

          {/* Columna derecha — Valores */}
          <div className="valores-col">
            <span 
            className="section-label"
            style={{
              marginBottom: "1.25rem", 
              display: "block",
              textAlign: "right",
            }}
            >
              Nuestros Valores
            </span>

            <div className="valores-cards">
              {valores.map((v, i) => (
                <div
                  key={v.num}
                  className={`valor-box${isOpen(i) ? " valor-box--open" : ""}`}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => setActive(active === i ? null : i)}
                >
                  <span className="valor-box-num">{v.num}</span>
                  <span className="valor-box-name">{v.name}</span>
                  <p className="valor-box-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .valores-col {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .valores-cards {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        /* Estado base: cuadrado pequeño */
        .valor-box {
          background: #101d30;
          border: 1px solid rgba(66,165,245,0.12);
          border-radius: 10px;
          cursor: pointer;
          overflow: hidden;
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 16px 20px;
          width: 240px;
          min-height: 72px;
          margin-left: auto;
          transition:
            width 0.4s cubic-bezier(0.4,0,0.2,1),
            height 0.35s cubic-bezier(0.4,0,0.2,1),
            background 0.3s ease,
            border-color 0.3s ease,
            box-shadow 0.3s ease;
          position: relative;
          transform-origin: right center;
        }

        .valor-box::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: linear-gradient(180deg, #1e88e5, #26c6da);
          border-radius: 3px 0 0 3px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        /* Estado expandido: rectángulo grande */
        .valor-box--open {
          width: 100%;
          min-height: 110px;
          background: #152440;
          border-color: rgba(66,165,245,0.3);
          box-shadow: 0 8px 24px rgba(21,101,192,0.2);
        }

        .valor-box--open::before {
          opacity: 1;
        }

        .valor-box-num {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 1.6rem;
          color: rgba(66,165,245,0.25);
          letter-spacing: 2px;
          flex-shrink: 0;
          transition: color 0.3s ease;
          line-height: 1;
        }

        .valor-box--open .valor-box-num {
          color: rgba(66,165,245,0.5);
        }

        .valor-box-name {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #e8f4fd;
          white-space: nowrap;
          flex-shrink: 0;
        }

        .valor-box-desc {
          font-size: 0.85rem;
          color: #90caf9;
          font-weight: 300;
          line-height: 1.7;
          margin: 0;
          opacity: 0;
          max-width: 0;
          overflow: hidden;
          white-space: nowrap;
          transition:
            opacity 0.3s ease 0.1s,
            max-width 0.4s cubic-bezier(0.4,0,0.2,1);
        }

        .valor-box--open .valor-box-desc {
          opacity: 1;
          max-width: 400px;
          white-space: normal;
        }

        @media (max-width: 768px) {
          .valor-box { width: 100%; }
          .valor-box-desc { white-space: normal; max-width: 100%; }
        }
      `}</style>
    </section>
  );
}