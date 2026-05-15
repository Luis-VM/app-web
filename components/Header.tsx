import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav>
        <h1>BIRLCOMEX SRL</h1>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/nosotros">Nosotros</Link></li>
          <li><Link href="/servicios">Servicios</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
}