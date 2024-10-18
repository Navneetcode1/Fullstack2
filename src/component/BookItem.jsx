import React from 'react';

const BookItem = ({ book, books, setBooks }) => {
  // Function to delete the book from the local state
  const handleDelete = () => {
    const updatedBooks = books.filter((b) => b.id !== book.id);  // Filter out the book to delete
    setBooks(updatedBooks);  // Update the state
  };

  return (
    <li>
      <div>
        <strong>{book.title}</strong> by {book.author}
        <p>{book.description}</p>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

export default BookItem;
