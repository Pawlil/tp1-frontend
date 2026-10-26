
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';
import { useCart } from '../context/CartContext';
import logoImg from '../assets/logo.jpg';
import "./navBar.css";


function StoreNavbar() {
  const { totalItems } = useCart();
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand
          as={NavLink}
          to="/"
          end
          className="navbar-brand-custom"
        >
          <img
            src={logoImg}
            alt="Logo Biblio-Tec"
            className="navbar-logo"
            
          />
          <span>Biblio-Tec</span>
        </Navbar.Brand>

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar-toggle-custom"
          aria-label="Abrir menú"
        />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-links">
            <Nav.Link as={NavLink} to="/" end>
              Inicio
            </Nav.Link>

            <Nav.Link as={NavLink} to="/novedades">
              Novedades
            </Nav.Link>

            <Nav.Link as={NavLink} to="/productos">
              Catálogo
            </Nav.Link>

            <Nav.Link as={NavLink} to="/contacto">
              Contacto
            </Nav.Link>

            <Nav.Link
              as={NavLink}
              to="/carrito"
              className="navbar-cart"
              aria-label="Carrito de compras"
              title="Carrito de compras"
            >
              <Cart3 size={24} />
              {totalItems > 0 && <span className="navbar-cart-count">{totalItems}</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavbar;
