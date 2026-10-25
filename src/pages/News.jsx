import { books } from "../data/books";
import ProductCard from "../components/ProductCard";
import Container from "react-bootstrap/Container";
import "./News.css";

const News = () => {
  const novedades = books.slice(2, 5);

  return (
    <Container className="novedades">
      <h1 className="novedades-titulo text-center">Novedades</h1>

      <p className="novedades-descripcion">
        Descubrí los últimos libros que llegaron a nuestra librería.
      </p>

      <div className="ultimos-ingresos">
    <h2>Últimos ingresos</h2>
    <span>{novedades.length} libros</span>
  </div>

      <div className="novedades-grid">
        {novedades.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </div>
    </Container>
  );
};

export default News;