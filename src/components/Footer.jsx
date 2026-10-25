
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__brand">
          <h2 className="footer__logo">Librería Biblio-Tec</h2>
          <p>
            Un lugar para descubrir historias,
            explorar ideas y encontrar tu próxima lectura.
          </p>
        </section>

        <nav className="footer__links" aria-label="Enlaces del pie de página">
          <div className="footer__column">
            <h3>Explorá</h3>
            <a href="/">Inicio</a>
            <a href="/productos">Catálogo</a>
          </div>

          <div className="footer__column">
            <h3>Información</h3>
            <a href="/contacto">Contacto</a>
          </div>
        </nav>
      </div>

      <div className="footer__bottom">
        <p>© 2026 Librería Biblio-Tec. Todos los derechos reservados a UNAHUR.</p>
        <p>Hecho para CIU</p>
      </div>
    </footer>
  );
}

export default Footer;
