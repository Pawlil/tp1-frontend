
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { Cart3 } from 'react-bootstrap-icons';

function StoreNavbar() {
  // Cantidad de productos de ejemplo
  const cartCount = 2;

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Biblio-Tec
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/productos">
              Catálogo
            </Nav.Link>

            <Nav.Link as={Link} to="/ofertas">
              Ofertas
            </Nav.Link>

            <Nav.Link as={Link} to="/contacto">
              Contacto
            </Nav.Link>

            <NavDropdown title="Géneros" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/genero/romance">
                Romance
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/genero/misterio">
                Misterio
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/genero/fantasia">
                Fantasía
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Nav>
            <Nav.Link
              as={Link}
              to="/carrito"
              className="d-flex align-items-center gap-2"
              aria-label={`Carrito de compras, ${cartCount} productos`}
            >
              <Cart3 size={22} />
              Carrito
              <span className="badge bg-dark rounded-pill">
                {cartCount}
              </span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default StoreNavbar;
