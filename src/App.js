import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredBooks, setFilteredBooks] = useState([
    { id: 1, title: 'Learn Python', author: 'John Doe', available: true },
    { id: 2, title: 'Mastering C++', author: 'Jane Smith', available: true },
    { id: 3, title: 'JavaScript for Beginners', author: 'Robert Brown', available: false },
    { id: 4, title: 'Advanced Java', author: 'Emily White', available: true },
    { id: 5, title: 'Data Structures in C', author: 'Michael Green', available: true },
    { id: 6, title: 'Algorithms in Python', author: 'Sarah Black', available: false },
  ]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  return (
    <div>
      <h1>Library Management System</h1>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setFilteredBooks={setFilteredBooks}
      />
      <BookList
        books={filteredBooks}
        borrowedBooks={borrowedBooks}
        setBorrowedBooks={setBorrowedBooks}
        setFilteredBooks={setFilteredBooks}
      />
    </div>
  );
};

export default App;
