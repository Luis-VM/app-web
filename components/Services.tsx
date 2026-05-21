export default function Services() {
  const servicios = [
    {
      num: "01",
      title: "Despacho Aduanero",
      desc: "Gestionamos toda la documentación y trámites ante la Aduana Nacional con precisión y cumplimiento normativo.",
    },
    {
      num: "02",
      title: "Búsqueda de Proveedores",
      desc: "Identificamos fabricantes internacionales confiables y verificados según las necesidades específicas de tu negocio.",
    },
    {
      num: "03",
      title: "Gestión de Compras",
      desc: "Coordinamos negociaciones, contratos y adquisiciones internacionales para asegurar las mejores condiciones.",
    },
    {
      num: "04",
      title: "Logística Internacional",
      desc: "Gestionamos el transporte marítimo, aéreo y terrestre con seguimiento en tiempo real de cada embarque.",
    },
    {
      num: "05",
      title: "Asesoría Arancelaria",
      desc: "Orientamos sobre clasificación arancelaria, regímenes aduaneros y beneficios tributarios vigentes en Bolivia.",
    },
    {
      num: "06",
      title: "Almacenamiento y Distribución",
      desc: "Coordinamos el almacenamiento temporal y la distribución final de la mercancía en destino.",
    },
  ];

  return (
    <section id="servicios">
      <div className="section-inner">
        <span className="section-label">Lo que hacemos</span>
        <h2 className="section-title">Nuestros Servicios</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Cubrimos todo el ciclo de importación, desde la búsqueda del
          proveedor hasta la entrega final en Bolivia.
        </p>

        <div className="servicios-grid">
          {servicios.map((s) => (
            <div className="servicio-card" key={s.num}>
              <span className="servicio-num">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
