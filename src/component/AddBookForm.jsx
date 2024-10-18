import React, { useState } from 'react';

const AddBookForm = ({ books, setBooks }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new book object
    const newBook = {
      id: books.length + 1,  // Generate a new ID based on the length of the books array
      title,
      author,
      description,
    };

    // Add the new book to the existing books list
    setBooks([...books, newBook]);

    // Clear the input fields
    setTitle('');
    setAuthor('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="add-book-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
