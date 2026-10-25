<<<<<<< HEAD
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CartPlus, Truck } from "react-bootstrap-icons";
import "./ProductDetail.css";

function ProductDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id, 10));

  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");

  if (!book) {
    return (
      <Container className="detalle-producto py-5 text-center">
        <h2>Libro no encontrado</h2>
        <Button as={Link} to="/productos" variant="outline-primary" className="mt-3">
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  const { title, author, price, image, description, category, stock } = book;
  const cuota = (price / 6).toFixed(2);
  const hayStock = stock > 0;

  const agregarAlCarrito = () => {
    if (!hayStock) return;

    setTipoMensaje("success");
    setMensaje(`Se agregó "${title}" al carrito.`);
  };

=======
const ProductDetail = () => {
>>>>>>> origin/carrito_compras_staccia
  return (
    <Container className="detalle-producto py-5">
      <Button
        as={Link}
        to="/productos"
        variant="outline-primary"
        className="mb-4"
      >
        Volver al catálogo
      </Button>

      <Row className="g-4 align-items-start">
        <Col md={5} className="text-center">
          <img
            src={image}
            alt={`Tapa del libro ${title}`}
            className="img-fluid sombra-libro"
          />
        </Col>

        <Col md={7}>
          <span className="text-muted text-uppercase mb-2 d-block small">
            Inicio &gt; Libros &gt; {category}
          </span>

          <h1>{title}</h1>
          <h4>{author}</h4>

          <h2 className="mt-3">${price.toLocaleString("es-AR")}</h2>

          <p>6 cuotas sin interés de ${cuota}</p>

          <div className="d-flex align-items-center gap-2 mt-4 flex-wrap">
            <div className="selector-cantidad d-flex align-items-center">
              <button
                type="button"
                disabled={!hayStock || cantidad <= 1}
                onClick={() => setCantidad(cantidad - 1)}
                aria-label="Disminuir cantidad"
              >
                -
              </button>

              <input
                type="number"
                value={hayStock ? cantidad : 0}
                readOnly
                aria-label="Cantidad de libros"
              />

              <button
                type="button"
                disabled={!hayStock || cantidad >= stock}
                onClick={() => setCantidad(cantidad + 1)}
                aria-label="Aumentar cantidad"
              >
                +
              </button>
            </div>

            <Button
              onClick={agregarAlCarrito}
              disabled={!hayStock}
              className="btn-azul d-inline-flex align-items-center gap-2 px-3 py-2"
            >
              <CartPlus />
              {hayStock ? "AGREGAR AL CARRITO" : "SIN STOCK"}
            </Button>
          </div>

          {mensaje && (
            <div
              className={`alert alert-${tipoMensaje} mt-3 py-2 px-3 small d-inline-block`}
              role="status"
            >
              {mensaje}
            </div>
          )}

          <div className="envio-caja p-3 mt-4">
            <p className="d-flex align-items-center gap-2 mb-3">
              <Truck size={22} />
              Envío gratis superando los $40.000,00
            </p>

            <Form
              className="d-flex align-items-center gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <Form.Control
                type="text"
                placeholder="Tu código postal"
                className="input-cp"
                aria-label="Código postal"
              />
              <Button type="submit" variant="outline-secondary">
                CALCULAR
              </Button>
            </Form>
          </div>

          <section className="mt-5">
            <h4>Especificaciones</h4>
            <ul className="lista-especificaciones">
              <li><strong>Categoría:</strong> {category}</li>
              <li><strong>Autor:</strong> {author}</li>
              <li><strong>Stock disponible:</strong> {hayStock ? stock : "Agotado"}</li>
              <li><strong>Formato:</strong> Físico</li>
              <li><strong>Idioma:</strong> Español</li>
            </ul>
          </section>

          <section className="mt-4">
            <h4>Sinopsis</h4>
            <p>{description}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
