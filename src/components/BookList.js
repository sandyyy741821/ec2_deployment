import React from 'react';

const BookList = ({ books, borrowedBooks, setBorrowedBooks, setFilteredBooks }) => {
  const borrowBook = (bookId) => {
    setFilteredBooks(
      books.map((book) =>
        book.id === bookId && book.available
          ? { ...book, available: false }
          : book
      )
    );
    setBorrowedBooks([...borrowedBooks, bookId]);
  };

  const returnBook = (bookId) => {
    setFilteredBooks(
      books.map((book) =>
        book.id === bookId && !book.available
          ? { ...book, available: true }
          : book
      )
    );
    setBorrowedBooks(borrowedBooks.filter((id) => id !== bookId));
  };

  return (
    <div>
      <h2>Available Books</h2>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} -{' '}
            {book.available ? (
              <>
                <button onClick={() => borrowBook(book.id)}>Borrow</button>
              </>
            ) : (
              <>
                <span>Not available</span>
                {borrowedBooks.includes(book.id) && (
                  <button onClick={() => returnBook(book.id)}>Return</button>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
