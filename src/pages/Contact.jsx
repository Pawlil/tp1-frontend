import { Form } from '../components/Form';
import "./Contact.css";
import instagramLogo from "../assets/instagramLogo.png";
import facebookLogo from "../assets/facebookLogo.png";
import twitterXLogo from "../assets/twitterXLogo.png";

const Contact = () => {
  return (
    <div className="row g-4">

      {/* HEAD */}
      <div className="col-md-7">
        <p className="contact-eyebrown">BIBLIO-TEC / CONTACTO</p>

        <div className="contact-heading">
          <h1 className="mb-4">¡Contáctate con nosotros!</h1>
          <h6>
            Completa el siguiente formulario para que podamos comunicarnos contigo. Nuestro equipo de 
            atención al cliente esta disponible para ayudarte a tener una mejor experiencia ya sea con tus pedidos o problemas del mismo.           
            Además, las respuestas son personalizadas, por lo que en un plazo de 24 horas (en nuestro horario comercial)
            nos pondremos en contacto. Nuestro horario comercial es de lunes a viernes de 9:00 a 17:00 GTM-3.
          </h6>
      </div>

      {/* FORM */}
      <Form />
      </div>

      {/* SIDEBAR */}
      <div className="col-md-5">
        <aside className="contact-sidebar">
          <h3>Siguenos en nuestras redes</h3>

          <p>
            ¿Tenés alguna consulta? También podés encontrarnos
            en nuestras redes sociales.
          </p>

          <div className="social-links">
            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img src={instagramLogo} alt="Instagram" /> Instagram
            </a>

            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img src={facebookLogo} alt="Facebook" /> Facebook
            </a>

            <a href="https://example.com" target="_blank" rel="noreferrer">
              <img src={twitterXLogo} alt="X" /> X
            </a>
          </div>
          
        </aside>
        <p className="eliminate">Decidir si borrar esto/Cambiarlo por otra cosa.</p>
      </div>

    </div>
  );
};


export default Contact;