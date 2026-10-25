import { books } from "../data/books";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "./Products.css";

function Products() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");
  const [ordenPrecio, setOrdenPrecio] = useState("");
  const [mostrarCategorias, setMostrarCategorias] = useState(false);
  const [mostrarOrden, setMostrarOrden] = useState(false);

  let librosFiltrados = books.filter((book) =>
    book.title.toLowerCase().includes(busqueda.toLowerCase())
  );

  if (categoria) {
    librosFiltrados = librosFiltrados.filter(
      (book) => book.category === categoria
    );
  }

  if (ordenPrecio === "menor") {
    librosFiltrados.sort((a, b) => a.price - b.price);
  } else if (ordenPrecio === "mayor") {
    librosFiltrados.sort((a, b) => b.price - a.price);
  }

  const categorias = [...new Set(books.map((book) => book.category))];

  function limpiarFiltros() {
    setCategoria("");
    setOrdenPrecio("");
    setMostrarCategorias(false);
    setMostrarOrden(false);
  }

  return (
    <main>
      <h1 className="titulo text-center">Nuestro catálogo</h1>

      <div className="container my-4">
        <input
          type="text"
          className="form-control form-control-lg buscador"
          placeholder="Buscar un libro por título..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        <div className="mt-4 mb-4">
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-filtros"
              className="boton-filtros"
            >
              <span className="contenido-boton-filtros">
                <i className="bi bi-sliders" aria-hidden="true"></i>
                Filtros
              </span>
            </Dropdown.Toggle>

            <Dropdown.Menu
              className="menu-filtros p-3"
              style={{ minWidth: "260px" }}
            >
              <div className="mb-3">
                <label className="form-label">Categoría</label>

                <button
                  type="button"
                  className={`selector-categoria ${
                    mostrarCategorias ? "abierto" : ""
                  }`}
                  aria-expanded={mostrarCategorias}
                  onClick={() => {
                    setMostrarCategorias(!mostrarCategorias);
                    setMostrarOrden(false);
                  }}
                >
                  <span>{categoria || "Todas las categorías"}</span>
                  <i
                    className={`bi ${
                      mostrarCategorias
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    }`}
                    aria-hidden="true"
                  ></i>
                </button>

                {mostrarCategorias && (
                  <div className="opciones-categorias">
                    <button
                      type="button"
                      className={`opcion-categoria ${
                        categoria === "" ? "seleccionada" : ""
                      }`}
                      onClick={() => {
                        setCategoria("");
                        setMostrarCategorias(false);
                      }}
                    >
                      Todas las categorías
                    </button>

                    {categorias.map((cat) => (
                      <button
                        type="button"
                        key={cat}
                        className={`opcion-categoria ${
                          categoria === cat ? "seleccionada" : ""
                        }`}
                        onClick={() => {
                          setCategoria(cat);
                          setMostrarCategorias(false);
                        }}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Ordenar por precio</label>

                <button
                  type="button"
                  className={`selector-categoria ${
                    mostrarOrden ? "abierto" : ""
                  }`}
                  aria-expanded={mostrarOrden}
                  onClick={() => {
                    setMostrarOrden(!mostrarOrden);
                    setMostrarCategorias(false);
                  }}
                >
                  <span>
                    {ordenPrecio === "menor"
                      ? "Menor a mayor"
                      : ordenPrecio === "mayor"
                      ? "Mayor a menor"
                      : "Orden original"}
                  </span>
                  <i
                    className={`bi ${
                      mostrarOrden
                        ? "bi-chevron-up"
                        : "bi-chevron-down"
                    }`}
                    aria-hidden="true"
                  ></i>
                </button>

                {mostrarOrden && (
                  <div className="opciones-categorias">
                    {[
                      { valor: "", texto: "Orden original" },
                      { valor: "menor", texto: "Menor a mayor" },
                      { valor: "mayor", texto: "Mayor a menor" },
                    ].map((opcion) => (
                      <button
                        type="button"
                        key={opcion.valor || "original"}
                        className={`opcion-categoria ${
                          ordenPrecio === opcion.valor
                            ? "seleccionada"
                            : ""
                        }`}
                        onClick={() => {
                          setOrdenPrecio(opcion.valor);
                          setMostrarOrden(false);
                        }}
                      >
                        {opcion.texto}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <Button
                variant="outline-secondary"
                className="boton-limpiar-filtros w-100"
                onClick={limpiarFiltros}
              >
                Limpiar filtros
              </Button>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      <section className="catalogo">
        {librosFiltrados.map((book) => (
          <ProductCard key={book.id} book={book} />
        ))}
      </section>
    </main>
  );
}

export default Products;