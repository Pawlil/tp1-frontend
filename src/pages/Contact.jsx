import { Form } from '../components/Form';
import "./Contact.css";
import instagramLogo from "../assets/instagramLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import twitterXLogo from "../assets/twitterXLogo.png";

const Contact = () => {
  return (
    <div className="contact-page row g-4">

      {/* HEADER Y FORMULARIO */}
      <div className="col-md-7">

        <p className="contact-eyebrown">BIBLIO-TEC / CONTACTO</p>

        <div className="contact-heading">
          <h1>¡Contáctate con nosotros!</h1>

          <p className="contact-intro">
            Completa el siguiente formulario para que podamos comunicarnos
            contigo. Nuestro equipo de atención al cliente está disponible
            para ayudarte a tener una mejor experiencia en las próximas
            24 horas.

            <span className="contact-schedule">
              Nuestro horario comercial es de lunes a viernes de 9:00 a
              17:00 GMT-3.
            </span>
          </p>
        </div>

        {/* FORMULARIO */}
        <Form />

      </div>

      {/* SIDEBAR */}
      <div className="col-md-5">

        <aside className="contact-sidebar">

          <span className="contact-sidebar-label">
            ESTAMOS PARA AYUDARTE
          </span>

          <h3>Seguinos en nuestras redes</h3>

          <p className="contact-sidebar-description">
            ¿Tenés alguna consulta? También podés encontrarnos
            en nuestras redes sociales. ¡Nos encanta estar en contacto
            con nuestra comunidad!
          </p>

          <div className="social-links">

            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram de Biblio-Tec"
            >
              <img src={instagramLogo} alt="" />
              <span>Instagram</span>
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook de Biblio-Tec"
            >
              <img src={facebookLogo} alt="" />
              <span>Facebook</span>
              <span className="social-arrow">↗</span>
            </a>

            <a
              href="https://example.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X de Biblio-Tec"
            >
              <img src={twitterXLogo} alt="" />
              <span>X</span>
              <span className="social-arrow">↗</span>
            </a>

          </div>

          <div className="contact-sidebar-note">
            <p>
              Consultanos para mejorar
              tu experiencia de lectura.
            </p>
            <strong>Equipo Biblio-Tec</strong>
          </div>

        </aside>

      </div>

    </div>
  );
};

export default Contact;