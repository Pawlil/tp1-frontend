import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======
import { useCart } from "../context/CartContext";
>>>>>>> origin/carrito_compras_staccia
import "./ProductCard.css";

function ProductoCard({ book }) {
  const disponible = book.stock > 0;
  const { addToCart, cartItems } = useCart();
  const cantidadEnCarrito = cartItems.find((item) => item.id === book.id)?.quantity || 0;
  const sinUnidadesDisponibles = !disponible || cantidadEnCarrito >= book.stock;

  return (
    <Card className="product-card h-100"
    >
      <div className="product-card-image"
      >
        <Link as={Link}
          to={"/producto/" + book.id} className="d-block text-decoration-none">
          <Card.Img


            variant="top"
            src={book.image}
            alt={book.title}
          />
        </Link>
      </div>

      <Card.Body className="d-flex flex-column">
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
          <span className="product-card-price">
            ${book.price}
          </span>

          <span
            className={`product-card-stock ${disponible ? "available" : "unavailable"
              }`}
          >
            {disponible ? "Disponible" : "Sin stock"}
          </span>
        </div>

        <div className="mt-auto d-flex flex-column gap-2">
<<<<<<< HEAD
          <Button
            as={Link}
            to={"/producto/" + book.id}
            variant="light"
            className="product-card-detail"
          >
=======
          <Button as={Link} to={`/producto/${book.id}`} variant="light" className="product-card-detail">
>>>>>>> origin/carrito_compras_staccia
            Ver detalle
          </Button>

          <Button
            variant="light"
            className="product-card-cart"
            disabled={sinUnidadesDisponibles}
            onClick={() => addToCart(book)}
          >
            {sinUnidadesDisponibles ? (disponible ? "Stock completo en carrito" : "Sin stock") : "Agregar al carrito"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
