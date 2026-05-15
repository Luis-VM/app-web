import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio">
      <h2>Soluciones Integrales de Importación</h2>
      <p>
        Conectamos tu negocio con proveedores internacionales confiables y
        gestionamos todo el proceso logístico de manera segura y eficiente.
      </p>

      <Link href="/contacto" className="btn-primary">
        Solicitar Cotización
      </Link>
    </section>
  );
}