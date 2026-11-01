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
  const [tipoLibro, setTipoLibro] = useState("");

  function obtenerEtiquetas(book) {
  const etiquetas = [];

  if ([3, 4, 5].includes(book.id)) {
    etiquetas.push("Nuevo");
  }

  if ([6, 9, 10, 12].includes(book.id)) {
    etiquetas.push("Más vendido");
  }

  return etiquetas;
}

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

  if (tipoLibro) {
  librosFiltrados = librosFiltrados.filter((book) =>
    obtenerEtiquetas(book).includes(tipoLibro)
  );
}

  const categorias = [...new Set(books.map((book) => book.category))];

  function limpiarFiltros() {
    setCategoria("");
    setOrdenPrecio("");
    setTipoLibro("")
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
              {/* Filtro por categoría */}
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
                <label className="form-label">Tipo de libro</label>

                <div className="opciones-categorias">
                  {[
                    { valor: "", texto: "Todos los libros" },
                    { valor: "Nuevo", texto: "Nuevos" },
                    { valor: "Más vendido", texto: "Más vendidos" },
                  ].map((opcion) => (
                    <button
                      type="button"
                      key={opcion.valor || "todos"}
                      className={`opcion-categoria ${
                        tipoLibro === opcion.valor ? "seleccionada" : ""
                      }`}
                      onClick={() => setTipoLibro(opcion.valor)}
                    >
                      {opcion.texto}
                    </button>
                  ))}
                </div>
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

              {/* Limpiar filtros */}
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
        {librosFiltrados.length > 0 ? (
          librosFiltrados.map((book) => (
            <ProductCard key={book.id} book={book} />
          ))
        ) : (
          <p className="text-center w-100 py-4">
            No se encontraron libros con esos filtros.
          </p>
        )}
      </section>
    </main>
  );
}
export default Products;