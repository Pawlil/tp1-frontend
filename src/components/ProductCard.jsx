import { books } from "../data/books";
import React from "react";

function ProductCard() {
  return (
    <div>
      {books.map((book) => (
        <article key={book.id}>
          <img src={book.image} alt={book.title} />
          <h2>{book.title}</h2>
          <p>{book.author}</p>
          <p>{book.category}</p>
          <p>${book.price.toLocaleString("es-AR")}</p>
        </article>
      ))}
    </div>
  );
}

export default ProductCard;