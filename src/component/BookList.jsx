import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      setBooks(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <AddBookForm fetchBooks={fetchBooks} />
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} fetchBooks={fetchBooks} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
