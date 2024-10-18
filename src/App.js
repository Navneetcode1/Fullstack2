import React, { useState } from "react";

const App = () => {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", description: "" });
  const [editingBook, setEditingBook] = useState(null);

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddOrUpdateBook = () => {
    if (editingBook) {
      // Update existing book
      setBooks(books.map((book) =>
        book.id === editingBook.id ? { ...editingBook, ...form } : book
      ));
    } else {
      // Add a new book with a unique ID
      const newBook = { id: Date.now(), ...form };
      setBooks([...books, newBook]);
    }

    // Reset form and editing state
    setForm({ title: "", author: "", description: "" });
    setEditingBook(null);
  };

  const handleEditBook = (book) => {
    setForm({ title: book.title, author: book.author, description: book.description });
    setEditingBook(book);
  };

  const handleDeleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div style={styles.app}>
      <h1 style={styles.heading}>Book Management</h1>
      <div style={styles.form}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleInputChange}
          style={styles.input}
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleInputChange}
          style={styles.input}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleInputChange}
          style={styles.textarea}
        />
        <button onClick={handleAddOrUpdateBook} style={styles.button}>
          {editingBook ? "Update" : "Add"} Book
        </button>
      </div>

      <div style={styles.bookList}>
        {books.map((book) => (
          <div key={book.id} style={styles.bookItem}>
            <h2 style={styles.bookTitle}>{book.title}</h2>
            <p style={styles.bookAuthor}>{book.author}</p>
            <p style={styles.bookDescription}>{book.description}</p>
            <button onClick={() => handleEditBook(book)} style={styles.editButton}>
              Edit
            </button>
            <button onClick={() => handleDeleteBook(book.id)} style={styles.deleteButton}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  app: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    maxWidth: "800px",
    margin: "0 auto",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: "20px",
  },
  input: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px",
    height: "80px",
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  bookList: {
    marginTop: "20px",
  },
  bookItem: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
  },
  bookTitle: {
    fontSize: "20px",
    marginBottom: "5px",
  },
  bookAuthor: {
    color: "#555",
    marginBottom: "10px",
  },
  bookDescription: {
    color: "#777",
    marginBottom: "15px",
  },
  editButton: {
    marginRight: "10px",
    padding: "5px 10px",
    backgroundColor: "#28a745",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  deleteButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default App;
