import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Trash3, Dash, Plus, Bag } from "react-bootstrap-icons";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const formatoPrecio = (precio) =>
  new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    maximumFractionDigits: 0,
  }).format(precio);

function Cart() {
  const { cartItems, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

  return (
    <section className="cart-page">
      <div className="cart-heading">
        <div>
          <span className="cart-eyebrow">BIBLIO-TEC / TU SELECCIÓN</span>
          <h1>Tu carrito</h1>
          <p>Revisá tus libros antes de continuar con la compra.</p>
        </div>
        <div className="cart-item-count"><Bag size={18} /> {totalItems} {totalItems === 1 ? "libro" : "libros"}</div>
      </div>

      {cartItems.length === 0 ? (
        <div className="cart-empty">
          <div className="cart-empty-icon"><Bag size={34} /></div>
          <h2>Tu carrito está vacío</h2>
          <p>Cuando encuentres una lectura que te guste, agregala y aparecerá acá.</p>
          <Button as={Link} to="/productos" className="cart-primary-button">Explorar libros</Button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-list">
            <div className="cart-list-header">
              <span>Libro</span>
              <span>Precio</span>
              <span>Cantidad</span>
              <span>Subtotal</span>
            </div>

            {cartItems.map((book) => (
              <article className="cart-book" key={book.id}>
                <div className="cart-book-main">
                  <img className="cart-book-cover" src={book.image} alt={`Tapa de ${book.title}`} />
                  <div className="cart-book-info">
                    <span className="cart-book-category">{book.category}</span>
                    <h2>{book.title}</h2>
                    <p>{book.author}</p>
                    <span className="cart-stock">{book.stock - book.quantity} disponibles después de esta selección</span>
                    <button className="cart-remove-mobile" type="button" onClick={() => removeFromCart(book.id)}>
                      <Trash3 size={14} /> Quitar
                    </button>
                  </div>
                </div>

                <div className="cart-unit-price" data-label="Precio por unidad">{formatoPrecio(book.price)}</div>

                <div className="cart-quantity" aria-label={`Cantidad de ${book.title}`}>
                  <button type="button" aria-label="Quitar una unidad" disabled={book.quantity <= 1} onClick={() => updateQuantity(book.id, book.quantity - 1)}>
                    <Dash size={15} />
                  </button>
                  <span>{book.quantity}</span>
                  <button type="button" aria-label="Agregar una unidad" disabled={book.quantity >= book.stock} onClick={() => updateQuantity(book.id, book.quantity + 1)}>
                    <Plus size={15} />
                  </button>
                </div>

                <div className="cart-subtotal" data-label="Subtotal">{formatoPrecio(book.price * book.quantity)}</div>
                <button className="cart-remove-desktop" type="button" aria-label={`Quitar ${book.title} del carrito`} title="Quitar del carrito" onClick={() => removeFromCart(book.id)}>
                  <Trash3 size={17} />
                </button>
              </article>
            ))}

            <div className="cart-continue-row">
              <Link to="/productos">← Seguir explorando el catálogo</Link>
              <span>Los precios se expresan en pesos argentinos.</span>
            </div>
          </div>

          <aside className="cart-summary">
            <h2>Resumen del pedido</h2>
            <div className="cart-summary-line"><span>Libros ({totalItems})</span><span>{formatoPrecio(totalPrice)}</span></div>
            <div className="cart-summary-line"><span>Envío</span><span className="cart-shipping-note">Se calcula al finalizar</span></div>
            <div className="cart-summary-total"><span>Total estimado</span><strong>{formatoPrecio(totalPrice)}</strong></div>
            <p className="cart-summary-note">El total es una estimación de los libros seleccionados. El envío puede modificar el importe final.</p>
            <Button as={Link} to="/contacto" className="cart-primary-button w-100">Continuar con la compra</Button>
            <div className="cart-safe-note">Compra simulada · No se realiza ningún cobro</div>
          </aside>
        </div>
      )}
    </section>
  );
}

export default Cart;
