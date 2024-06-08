import "../../Styles/book.scss";

export default function Book({ book, del = false, setBooks = null }) {
  function addToBookshelf() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
    alert("Book is added to bookshelf.");
  }

  function removeFromBookshelf() {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    const filteredBooks = books.filter((bk) => bk.id != book.id);
    setBooks(filteredBooks);
    localStorage.setItem("books", JSON.stringify(filteredBooks));
    alert("Book is removed from bookshelf.");
  }

  return (
    <div className="book">
      <p>
        <span>Title</span>
        <span>{book.title}</span>
      </p>
      <p>
        <span>Edition Count</span>
        <span>{book.edition_count}</span>
      </p>
      {!del ? (
        <button onClick={addToBookshelf}>Add to Bookshelf</button>
      ) : (
        <button onClick={removeFromBookshelf}>Remove from Bookshelf</button>
      )}
    </div>
  );
}
