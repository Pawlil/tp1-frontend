import { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./ProductCard.css";

function obtenerEtiquetas(book) {
const etiquetas = [];
if ([3,4,5].includes(book.id)) {
etiquetas.push("Nuevo");
}

if ([6,9,10,12].includes(book.id)) {
etiquetas.push("Más vendido");
}

return etiquetas;
}

function ProductoCard({ book }) {
  const disponible = book.stock > 0;
  const { addToCart, cartItems } = useCart();
  const etiquetas = obtenerEtiquetas(book);
  const tieneOferta = [1, 3].includes(book.id);
  const [agregado, setAgregado] = useState(false);

  function manejarAgregar() {
  const resultado = addToCart(book);

  if (resultado) {
    setAgregado(true);
    setTimeout(() => setAgregado(false), 1500);
  }
}

const precioAnterior = tieneOferta
  ? book.price * 1.2
  : null;
  const cantidadEnCarrito = cartItems.find((item) => item.id === book.id)?.quantity || 0;
  const sinUnidadesDisponibles = !disponible || cantidadEnCarrito >= book.stock;

  return (
<Card className="product-card h-100">
<div className="product-card-image">
<Card.Img
variant="top"
src={book.image}
alt={book.title}
/>
</div>

  <Card.Body className="d-flex flex-column">
    <div className="product-card-badges">
      {etiquetas.map((etiqueta) => (
        <span
          key={etiqueta}
          className={`product-card-badge ${
            etiqueta === "Nuevo" ? "nuevo" : "mas-vendido"
          }`}
        >
          {etiqueta}
        </span>
      ))}
    </div>

    <span className="product-card-category">
      {book.category}
    </span>

    <Card.Title className="product-card-title">
      {book.title}
    </Card.Title>

    <Card.Text className="product-card-description">
      {book.description}
    </Card.Text>

    <div className="product-card-info">
  <div className="product-card-prices">
  {tieneOferta && (
    <span className="product-card-offer">
      OFERTA
    </span>
  )}

  {tieneOferta && (
    <span className="product-card-old-price">
      ${precioAnterior}
    </span>
  )}

  <span className="product-card-price">
    ${book.price}
  </span>
</div>

  <span
    className={`product-card-stock ${
      disponible ? "available" : "unavailable"
    }`}
  >
    {disponible ? "Disponible" : "Sin stock"}
  </span>
</div>

    <div className="mt-auto d-flex flex-column gap-2">
      <Button
        as={Link}
        to={`/producto/${book.id}`}
        variant="light"
        className="product-card-detail"
      >
        Ver detalle
      </Button>

        <Button
  variant="light"
  className={`product-card-cart ${agregado ? "agregado" : ""}`}
  disabled={sinUnidadesDisponibles}
  onClick={manejarAgregar}
>
  {sinUnidadesDisponibles
    ? disponible
      ? "Stock completo en carrito"
      : "Sin stock"
    : agregado
      ? "✓ Agregado"
      : "Agregar al carrito"}
</Button>
    </div>

  </Card.Body>
</Card>

);
}

export default ProductoCard;
