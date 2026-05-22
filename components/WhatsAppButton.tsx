// components/WhatsAppButton.tsx
"use client";
import { useState } from "react";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const form = e.currentTarget;
    const nombre   = (form.elements.namedItem("nombre")   as HTMLInputElement).value;
    const ciudad   = (form.elements.namedItem("ciudad")   as HTMLInputElement).value;
    const telefono = (form.elements.namedItem("telefono") as HTMLInputElement).value;
    const email    = (form.elements.namedItem("email")    as HTMLInputElement).value;

    try {
      // Guardar en base de datos
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, ciudad, telefono, email }),
      });

      if (!res.ok) throw new Error("Error al guardar");

      // Abrir WhatsApp con mensaje personalizado
      const phone = "59175601875";
      const message = encodeURIComponent(
        `Hola BIRLCOMEX, mi nombre es ${nombre} y me comunico desde ${ciudad}.\n` +
        `Me interesa conocer más sobre sus servicios de importación.\n\n` 
      );
      window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
      setOpen(false);

    } catch {
      setError("Hubo un problema. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Botón flotante */}
      <button
        className="whatsapp-fab"
        onClick={() => setOpen(true)}
        aria-label="Contactar por WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="28" height="28" fill="white">
          <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.484 2.031 7.788L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.849l-.486-.289-5.002 1.193 1.234-4.867-.317-.5A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.560-.232.266-.465.299-.863.1-.398-.199-1.681-.620-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.760-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.960-.324-.778-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.120c.199.266 2.808 4.287 6.804 6.013.951.411 1.693.656 2.272.839.954.304 1.823.261 2.509.158.765-.114 2.354-.962 2.687-1.892.332-.930.332-1.727.232-1.893-.099-.165-.365-.265-.763-.464z" />
        </svg>
        <span className="whatsapp-fab-label">¡Escríbenos!</span>
      </button>

      {/* Modal con formulario */}
      {open && (
        <div className="whatsapp-overlay" onClick={() => setOpen(false)}>
          <div className="whatsapp-modal" onClick={(e) => e.stopPropagation()}>
            <button className="whatsapp-modal-close" onClick={() => setOpen(false)}>✕</button>

            <div className="whatsapp-modal-header">
              <div className="whatsapp-modal-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="24" height="24" fill="white">
                  <path d="M16 0C7.163 0 0 7.163 0 16c0 2.833.738 5.484 2.031 7.788L0 32l8.418-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.27 13.27 0 0 1-6.771-1.849l-.486-.289-5.002 1.193 1.234-4.867-.317-.5A13.27 13.27 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.719-1.294-.365-.133-.631-.199-.897.199-.266.398-1.029 1.294-1.261 1.560-.232.266-.465.299-.863.1-.398-.199-1.681-.620-3.203-1.977-1.184-1.057-1.983-2.362-2.215-2.760-.232-.398-.025-.613.174-.811.179-.178.398-.465.597-.697.199-.232.266-.398.398-.664.133-.266.066-.498-.033-.697-.1-.199-.897-2.162-1.229-2.960-.324-.778-.653-.672-.897-.684l-.764-.013c-.266 0-.697.1-1.063.498-.365.398-1.394 1.362-1.394 3.322s1.427 3.854 1.626 4.120c.199.266 2.808 4.287 6.804 6.013.951.411 1.693.656 2.272.839.954.304 1.823.261 2.509.158.765-.114 2.354-.962 2.687-1.892.332-.930.332-1.727.232-1.893-.099-.165-.365-.265-.763-.464z" />
                </svg>
              </div>
              <div>
                <h3 className="whatsapp-modal-title">Contactar por WhatsApp</h3>
                <p className="whatsapp-modal-sub">Te respondemos en minutos</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="whatsapp-form">
              <div className="whatsapp-field">
                <label htmlFor="wa-nombre">Nombre completo</label>
                <input id="wa-nombre" name="nombre" type="text" placeholder="Tu nombre" required />
              </div>
              <div className="whatsapp-field">
                <label htmlFor="wa-ciudad">Ciudad</label>
                <input id="wa-ciudad" name="ciudad" type="text" placeholder="Tu ciudad" required />
              </div>
              <div className="whatsapp-field">
                <label htmlFor="wa-telefono">Teléfono</label>
                <input id="wa-telefono" name="telefono" type="tel" placeholder="+591 7XXXXXXX" required />
              </div>
              <div className="whatsapp-field">
                <label htmlFor="wa-email">Correo electrónico</label>
                <input id="wa-email" name="email" type="email" placeholder="tu@email.com" required />
              </div>

              {error && <p className="whatsapp-error">{error}</p>}

              <button type="submit" className="whatsapp-submit" disabled={loading}>
                {loading ? "Guardando..." : "Abrir WhatsApp →"}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        /* ── Botón flotante ── */
        .whatsapp-fab {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          align-items: center;
          gap: 10px;
          background: #25d366;
          color: white;
          padding: 14px 20px 14px 16px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 1px;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          animation: fab-in 0.5s ease forwards;
        }
        .whatsapp-fab:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 8px 28px rgba(37, 211, 102, 0.55);
        }
        @keyframes fab-in {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ── Overlay ── */
        .whatsapp-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(4px);
          z-index: 10000;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding: 24px;
        }

        /* ── Modal ── */
        .whatsapp-modal {
          background: #0d1117;
          border: 1px solid rgba(66,165,245,0.15);
          border-radius: 16px;
          padding: 2rem;
          width: 100%;
          max-width: 380px;
          position: relative;
          animation: modal-in 0.3s ease forwards;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }
        @keyframes modal-in {
          from { opacity: 0; transform: translateY(20px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .whatsapp-modal-close {
          position: absolute;
          top: 14px; right: 16px;
          background: none;
          border: none;
          color: #4a7099;
          font-size: 1rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        .whatsapp-modal-close:hover { color: #e8f4fd; }

        .whatsapp-modal-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        .whatsapp-modal-icon {
          width: 44px; height: 44px;
          background: #25d366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        .whatsapp-modal-title {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #e8f4fd;
          margin: 0;
        }

        .whatsapp-modal-sub {
          font-size: 0.78rem;
          color: #4a7099;
          margin: 2px 0 0;
        }

        /* ── Formulario ── */
        .whatsapp-form {
          display: flex;
          flex-direction: column;
          gap: 0.875rem;
        }

        .whatsapp-field {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .whatsapp-field label {
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.68rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #4a7099;
        }

        .whatsapp-field input {
          background: #131920;
          border: 1px solid rgba(66,165,245,0.1);
          border-radius: 6px;
          padding: 10px 14px;
          color: #e8f4fd;
          font-size: 0.9rem;
          font-family: 'Barlow', sans-serif;
          outline: none;
          transition: border-color 0.2s;
        }

        .whatsapp-field input:focus {
          border-color: #25d366;
        }

        .whatsapp-field input::placeholder { color: #4a7099; }

        .whatsapp-error {
          color: #f87171;
          font-size: 0.82rem;
        }

        .whatsapp-submit {
          background: #25d366;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 12px;
          font-family: 'Barlow Condensed', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 1.5px;
          cursor: pointer;
          margin-top: 0.25rem;
          transition: opacity 0.2s, transform 0.2s;
        }

        .whatsapp-submit:hover { opacity: 0.88; transform: translateY(-1px); }
        .whatsapp-submit:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (max-width: 480px) {
          .whatsapp-fab-label { display: none; }
          .whatsapp-fab { padding: 14px; border-radius: 50%; }
          .whatsapp-overlay { padding: 16px; align-items: center; justify-content: center; }
          .whatsapp-modal { max-width: 100%; }
        }
      `}</style>
    </>
  );
}