import { useEffect, useState } from "react";
import "../../Styles/home.scss";
import Book from "../Book/Book";

export default function Home() {
  const [bookName, setBookName] = useState("");
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState(null);

  useEffect(() => {
    if (bookName) {
      setIsLoading(true);

      if (debounceTimeout) {
        clearTimeout(debounceTimeout);
      }

      const newTimeout = setTimeout(async () => {
        try {
          const response = await fetch(
            `https://openlibrary.org/search.json?q=${bookName}&limit=10&page=1`
          );
          const data = await response.json();
          if (!data.numFound) {
            alert("No such book found.");
          }
          const results = data.docs.map((book) => {
            return {
              title: book.title,
              edition_count: book.edition_count,
              id: Number(
                `${Math.floor(Math.random() * 100000)}${book.edition_count}`
              ),
            };
          });
          setBooks(results);
        } catch (error) {
          alert("Failed to fetch books.");
          console.error("Failed to fetch books:", error);
        } finally {
          setIsLoading(false);
        }
      }, 500);

      setDebounceTimeout(newTimeout);
    } else {
      setBooks([]);
      setIsLoading(false);
    }
  }, [bookName]);

  return (
    <section className="home">
      <p>
        Book <span>Search</span>.
      </p>

      <div>
        <input
          type="text"
          placeholder="Search Book by name here.."
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        {isLoading && <img src="/loader.svg" alt="Loader" className="loader" />}
      </div>

      <div>
        {books.length === 0
          ? "No book is searched yet."
          : books.map((book) => <Book key={book.id} book={book} />)}
      </div>
    </section>
  );
}
