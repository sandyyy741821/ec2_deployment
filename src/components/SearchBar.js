import React from 'react';

const SearchBar = ({ searchTerm, setSearchTerm, setFilteredBooks }) => {
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchTerm(query);

    setFilteredBooks((prevBooks) =>
      prevBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
      )
    );
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search books by title or author"
      />
    </div>
  );
};

export default SearchBar;
