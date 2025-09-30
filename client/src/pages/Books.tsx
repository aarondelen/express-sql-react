import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
const Books = () => {
  type Book = {
    id: number;
    book_title: string;
    book_desc: string;
    book_cover: string;
    book_price: number;
  };

  const [books, setBooks] = useState<Book[]>([]);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get(`${API_URL}/books`);
        setBooks(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchBooks();
  }, []);

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`${API_URL}/books/${id}`);
      setBooks(books.filter((book) => book.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center gap-5 mt-5">
        <h1>Books</h1>
        <div className="max-h-screen px-0 py-[100px] flex items-center justify-center text-center">
          <div className="flex gap-4">
            {books.map((book) => (
              <div
                className="flex-1 flex flex-col gap-2.5 items-center"
                key={book.id}
              >
                {book.book_cover && (
                  <img
                    className="w-full h-[200px] rounded-md object-cover bg-red-200"
                    src={book.book_cover}
                    alt={book.book_title}
                  />
                )}
                <h2 className="font-semibold text uppercase mb-1 border-b ">
                  {book.book_title}
                </h2>
                <p className="text-gray-800">{book.book_desc}</p>
                <span className="block">${book.book_price}</span>
                <Button
                  text="Delete"
                  type="delete"
                  onClick={() => handleDelete(book.id)}
                />
                <Link to={`/update/${book.id}`}>
                  <Button text="Update" type="update" />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <Link to="/add">
          <Button text="Add New Book" type="add" />
        </Link>
      </div>
    </>
  );
};

export default Books;
