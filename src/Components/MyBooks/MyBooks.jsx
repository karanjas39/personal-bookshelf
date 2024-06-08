import "../../Styles/myBooks.scss";
import { useLoaderData } from "react-router-dom";
import Book from "../Book/Book";
import { useState } from "react";

export default function MyBooks() {
  const [books, setBooks] = useState(useLoaderData());

  return (
    <section className="mybooks">
      <p>
        My <span>BookShelf</span>.
      </p>
      <div>
        {books.length === 0
          ? "No book is added yet."
          : books.map((book) => (
              <Book key={book.id} book={book} del={true} setBooks={setBooks} />
            ))}
      </div>
    </section>
  );
}

export function getBooksFromStorage() {
  const books = JSON.parse(localStorage.getItem("books")) || [];
  return books;
}
