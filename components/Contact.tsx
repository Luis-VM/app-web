"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="contacto">
      <div className="section-inner">
        <span className="section-label">Hablemos</span>
        <h2 className="section-title">Contáctanos</h2>
        <div className="divider" />
        <p className="section-subtitle">
          Estamos listos para asesorarte. Cuéntanos sobre tu proyecto y te
          respondemos en menos de 24 horas.
        </p>

        <div className="contacto-grid">
          <div className="contacto-info">
            <div className="contact-item">
              <div className="contact-icon">💬</div>
              <div>
                <div className="contact-label">WhatsApp</div>
                <div className="contact-value">+591 75601875</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <div className="contact-label">Email</div>
                <div className="contact-value">info@birlcomex.com.bo</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <div className="contact-label">Dirección</div>
                <div className="contact-value">Av. Beni 2do Anillo, Santa Cruz de la Sierra, Bolivia</div>
              </div>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="about-card" style={{ textAlign: "center", padding: "3rem" }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ marginBottom: "0.5rem" }}>¡Mensaje enviado!</h3>
                <p>Nos pondremos en contacto contigo en las próximas 24 horas.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input id="nombre" type="text" placeholder="Tu nombre" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="empresa">Empresa</label>
                    <input id="empresa" type="text" placeholder="Tu empresa" />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="tu@email.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="servicio">Servicio de interés</label>
                  <select id="servicio" defaultValue="">
                    <option value="" disabled>Selecciona un servicio</option>
                    <option>Despacho Aduanero</option>
                    <option>Búsqueda de Proveedores</option>
                    <option>Gestión de Compras</option>
                    <option>Logística Internacional</option>
                    <option>Asesoría Arancelaria</option>
                    <option>Otro</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea id="mensaje" placeholder="Cuéntanos sobre tu proyecto o consulta..." required />
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", border: "none" }}>
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}