import React from 'react';
import axios from 'axios';

const BookItem = ({ book, fetchBooks }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/books/${book.id}`);
      fetchBooks();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <li>
      <div>
        <strong>{book.title}</strong> by {book.author}
        <p>{book.description}</p>
      </div>
      <button onClick={() => handleDelete()}>Delete</button>
    </li>
  );
};

export default BookItem;
