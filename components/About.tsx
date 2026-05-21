export default function About() {
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

        <div className="about-grid">
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

          <div>
            <Values inline />
          </div>
        </div>
      </div>
    </section>
  );
}

function Values({ inline }: { inline?: boolean }) {
  const valores = [
    { num: "01", name: "Honestidad" },
    { num: "02", name: "Responsabilidad" },
    { num: "03", name: "Integridad" },
    { num: "04", name: "Eficiencia" },
  ];

  return (
    <div className="valores-grid" style={inline ? { marginTop: 0 } : {}}>
      {valores.map((v) => (
        <div className="valor-item" key={v.num}>
          <span className="valor-num">{v.num}</span>
          <span className="valor-name">{v.name}</span>
        </div>
      ))}
    </div>
  );
}
