import express from "express";
import cors from "cors";
import mysql from "mysql2";
import dotenv from "dotenv";

dotenv.config(); // load environment variables from .env file

const app = express(); // initialize express app

app.use(express.json()); // middleware to parse JSON bodies
app.use(cors()); // enable CORS

// Create a connection to the database

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

app.get("/", (req, res) => {
  res.json("Hello this is the backend");
});

// Endpoint to get all books

app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) {
      console.error("Query error:", err);
    }
    return res.json(data);
  });
});

// Endpoint to add a new book

app.post("/books", (req, res) => {
  const q =
    "INSERT INTO books(`book_title`, `book_desc`, `book_cover`, `book_price`) VALUES (?)";
  const values = [
    req.body.book_title,
    req.body.book_desc,
    req.body.book_cover,
    req.body.book_price
  ];

  db.query(q, [values], (err, data) => {
    if (err) {
      console.error("Query error:", err);
    }
    return res.json("Book has been created successfully 😉");
  });
});

app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "DELETE FROM books WHERE id = ?";
  db.query(q, [bookId], (err, data) => {
    if (err) {
      console.error("Query error:", err);
    }
    return res.json("Book has been deleted successfully 😉");
  });
});

app.put("/books/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE books SET `book_title` = ?, `book_desc` = ?, `book_cover` = ?, `book_price` = ? WHERE id = ?";
    const values = [
    req.body.book_title,
    req.body.book_desc,
    req.body.book_cover,
    req.body.book_price
  ];
  db.query(q, [...values, bookId], (err, data) => {
    if (err) {
      console.error("Query error:", err);
    }
    return res.json("Book has been updated successfully 😉");
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Connected to backend on port ${process.env.PORT}`);
});
