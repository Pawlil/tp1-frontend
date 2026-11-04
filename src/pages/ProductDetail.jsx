import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { books } from "../data/books";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { CartPlus, Truck } from "react-bootstrap-icons";
import { useCart } from "../context/CartContext";
import "./ProductDetail.css";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { useFavorites } from "../context/FavoritesContext";




function ProductDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id, 10));
  const tieneOferta = [1, 3].includes(book?.id);
  const [agregado, setAgregado] = useState(false);

  const precioAnterior = tieneOferta
    ? book.price * 1.2
    : null;
  const { addToCart, cartItems, updateQuantity } = useCart();


  const { toggleFavorito, esFavorito } = useFavorites();


  const [cantidad, setCantidad] = useState(1);
  const [mensaje, setMensaje] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState("success");

  if (!book) {
    return (
      <Container className="detalle-producto py-5 text-center">
        <h2>Libro no encontrado</h2>
        <Button
          as={Link}
          to="/productos"
          variant="outline-primary"
          className="mt-3"
        >
          Volver al catálogo
        </Button>
      </Container>
    );
  }

  const { title, author, price, image, description, category, stock } = book;
  const cuota = (price / 6).toFixed(2);
  const hayStock = stock > 0;

  function agregarAlCarrito() {
    const enCarrito = cartItems.find((item) => item.id === book.id)?.quantity || 0;
    const resultado = addToCart(book);

    if (resultado) {
      updateQuantity(book.id, enCarrito + cantidad);
      setAgregado(true);
      setTimeout(() => setAgregado(false), 1500);
    }
  }


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
          <div className="detalle-imagen">
            <img
              src={image}
              alt={`Tapa del libro ${title}`}
              className="sombra-libro"
            />
          </div>
        </Col>

        <Col md={7}>
          <nav aria-label="breadcrumb" className="breadcrumb-detalle mb-2">
            <Link to="/">Inicio</Link>
            <span>/</span>
            <Link to="/productos">Libros</Link>
            <span>/</span>
            <span>{category}</span>
            <span>/</span>
            <span className="actual">{title}</span>
          </nav>

          <h1>{title}</h1>
          <h4>{author}</h4>

          <div className="product-detail-prices">
            {tieneOferta && (
              <span className="product-detail-offer">
                OFERTA
              </span>
            )}

            {tieneOferta && (
              <span className="product-detail-old-price">
                ${precioAnterior}
              </span>
            )}

            <h2 className="product-detail-price">
              ${price}
            </h2>
          </div>

          <p>6 cuotas sin interés de ${cuota}</p>

          <div className="d-flex align-items-center gap-2 mt-4 flex-wrap">
            {hayStock && (
              <div className="selector-cantidad d-flex align-items-center">
                <button
                  type="button"
                  disabled={cantidad <= 1}
                  onClick={() => setCantidad(cantidad - 1)}
                  aria-label="Disminuir cantidad"
                >
                  -
                </button>

                <input
                  type="number"
                  value={cantidad}
                  readOnly
                  aria-label="Cantidad de libros"
                />

                <button
                  type="button"
                  disabled={cantidad >= stock}
                  onClick={() => setCantidad(cantidad + 1)}
                  aria-label="Aumentar cantidad"
                >
                  +
                </button>
              </div>
            )}


            <Button
              onClick={agregarAlCarrito}
              disabled={!hayStock}
              className={`btn-azul d-inline-flex align-items-center gap-2 px-3 py-2 ${agregado ? "agregado" : ""
                }`}
            >
              {agregado ? (
                <>✓ AGREGADO</>
              ) : (
                <>
                  <CartPlus />
                  {hayStock ? "AGREGAR AL CARRITO" : "SIN STOCK"}
                </>
              )}
            </Button>

          </div>

          <div className="acciones-compra mt-3">
            {hayStock && (
              <Button as={Link} to="/compra" onClick={agregarAlCarrito} className="btn-comprar">

                COMPRAR
              </Button>
            )}

            <button
              type="button"
              className={`btn-favorito-detalle ${esFavorito(book.id) ? "activo" : ""}`}
              onClick={() => toggleFavorito(book.id)}
              aria-label={esFavorito(book.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
              title={esFavorito(book.id) ? "Quitar de favoritos" : "Agregar a favoritos"}
            >
              {esFavorito(book.id) ? <HeartFill size={22} /> : <Heart size={22} />}
            </button>
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
        </Col>
      </Row>

      <Row className="g-4 mt-4">
        <Col md={5}>
          <section>
            <h4>Especificaciones</h4>
            <ul className="lista-especificaciones">
              <li><strong>Categoría:</strong> {category}</li>
              <li><strong>Autor:</strong> {author}</li>
              <li>
                <strong>Stock disponible:</strong>{" "}
                {hayStock ? stock : "Agotado"}
              </li>
              <li><strong>Formato:</strong> Físico</li>
              <li><strong>Idioma:</strong> Español</li>
            </ul>
          </section>
        </Col>

        <Col md={7}>
          <section>
            <h4>Sinopsis</h4>
            <p>{description}</p>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default ProductDetail;
