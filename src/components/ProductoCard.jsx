
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function ProductoCard({ book }) {
  const disponible = book.stock > 0;

  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={book.image}
        alt={book.title}
        style={{
          height: "320px",
          objectFit: "contain",
          padding: "12px",
        }}
      />

      <Card.Body className="d-flex flex-column">
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          <strong>Categoría:</strong> {book.category}
        </Card.Text>
        <Card.Text>
          <strong>Precio:</strong> ${book.price}
        </Card.Text>
        <Card.Text>{book.description}</Card.Text>
        <Card.Text>
          <strong>Disponibilidad:</strong>{" "}
          {disponible ? "Disponible" : "Sin stock"}
        </Card.Text>
        <div className="mt-auto d-flex flex-column gap-2">
          <Button variant="light">
            Ver detalle
          </Button>
          <Button variant="light" disabled={!disponible}>
            Agregar al carrito
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProductoCard;
