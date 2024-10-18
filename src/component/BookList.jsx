import React, { useState } from 'react';
import BookItem from './BookItem';
import AddBookForm from './AddBookForm';

const BookList = () => {
  const [books, setBooks] = useState([]);

  return (
    <div>
      <AddBookForm books={books} setBooks={setBooks} />
      <ul>
        {books.map((book) => (
          <BookItem key={book.id} book={book} books={books} setBooks={setBooks} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
