"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav>
        <Link href="/" className="nav-logo">
          <Image
            src="/logo.png"
            alt="BIRLCOMEX SRL"
            width={44}
            height={44}
            style={{
              objectFit: "contain", 
              height: "auto"
              }}
          />
          <div className="nav-logo-text">
            <span className="nav-logo-name">BIRLCOMEX</span>
            <span className="nav-logo-sub">Agencia Despachante Aduanera</span>
          </div>
        </Link>

        <button
          className="menu-toggle"
          aria-label="Abrir menú"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>

        <ul className={open ? "open" : ""}>
          <li><Link href="/" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link href="/nosotros" onClick={() => setOpen(false)}>Nosotros</Link></li>
          <li><Link href="/servicios" onClick={() => setOpen(false)}>Servicios</Link></li>
          <li>
            <Link href="/contacto" className="nav-cta" onClick={() => setOpen(false)}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
