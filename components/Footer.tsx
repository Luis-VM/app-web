import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">
              <Image src="/logo.png" alt="BIRLCOMEX" width={36} height={36} style={{ objectFit: "contain" }} />
              <div className="nav-logo-text">
                <span className="nav-logo-name" style={{ fontSize: "1.2rem" }}>BIRLCOMEX</span>
                <span className="nav-logo-sub">Agencia Despachante Aduanera</span>
              </div>
            </Link>
            <p>
              Especialistas en importaciones y despacho aduanero en Bolivia.
              Transparencia, precisión y compromiso en cada operación.
            </p>
          </div>
          <div className="footer-col">
            <h4>Navegación</h4>
            <ul>
              <li><Link href="/">Inicio</Link></li>
              <li><Link href="/nosotros">Nosotros</Link></li>
              <li><Link href="/servicios">Servicios</Link></li>
              <li><Link href="/contacto">Contacto</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contacto</h4>
            <ul>
              <li><a href="https://wa.me/59175601875">WhatsApp: 75601875</a></li>
              <li><a href="mailto:info@birlcomex.com.bo">info@birlcomex.com.bo</a></li>
              <li><a href="#">Av. Beni 2do Anillo</a></li>
              <li><a href="#">Santa Cruz, Bolivia</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 BIRLCOMEX SRL. Todos los derechos reservados.</p>
          <p>Santa Cruz de la Sierra, Bolivia</p>
        </div>
      </div>
    </footer>
  );
}