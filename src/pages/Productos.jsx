import { books } from "../data/books";
import ProductoCard from "../components/ProductoCard";
import { useState } from "react";
import "./Productos.css";
import "bootstrap/dist/css/bootstrap.min.css";


function Productos() {
  const [busqueda, setBusqueda] = useState("");
  const librosFiltrados = books.filter((book) =>
  book.title.toLowerCase().includes(busqueda.toLowerCase())
);
  return (
    <main>
      <h1>Nuestro catálogo</h1>
     <div className="container my-4">
  <input
    type="text"
    className="form-control form-control-lg buscador"
    placeholder="Buscar un libro por título..."
    value={busqueda}
    onChange={(e) => setBusqueda(e.target.value)}
  />
</div>
      <section className="catalogo">
        {librosFiltrados.map((book) => (
          <ProductoCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  );
}

export default Productos;
