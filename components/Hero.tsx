import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio">
      <div className="hero-grid-bg" aria-hidden="true" />

      <div className="hero-inner">
        <div>
          <div className="hero-badge">
            <span />
            Agencia Despachante Aduanera — Bolivia
          </div>

          <h2 className="hero-title">
            Soluciones
            <em>de importación</em>
            Global
          </h2>

          <p className="hero-desc">
            Conectamos tu empresa con el comercio internacional. Gestionamos
            cada etapa del proceso aduanero con precisión, transparencia y
            compromiso.
          </p>

          <div className="hero-actions">
            <Link href="/contacto" className="btn-primary">
              Solicitar Cotización
            </Link>
            <Link href="/servicios" className="btn-ghost">
              Ver Servicios
            </Link>
          </div>
        </div>

        <div className="hero-stats">
          <div className="hero-stat-card">
            <div className="hero-stat-icon">🌐</div>
            <div>
              <div className="hero-stat-num">+50</div>
              <div className="hero-stat-label">Países de Origen</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">📦</div>
            <div>
              <div className="hero-stat-num">+500</div>
              <div className="hero-stat-label">Operaciones Anuales</div>
            </div>
          </div>
          <div className="hero-stat-card">
            <div className="hero-stat-icon">🛡️</div>
            <div>
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Cumplimiento Aduanero</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
