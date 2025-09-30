import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Input from "../components/Input";

const Update = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [books, setBooks] = useState({
    book_title: "",
    book_description: "",
    book_cover: "",
    book_price: null,
  });

  const navigate = useNavigate(); // Hook to navigate programmatically
  const location = useLocation(); // Hook to access the current location
  const bookId = location.pathname.split("/")[2]; // Get the book ID from the URL

  const handleChange = (e: any) => {
    setBooks((b) => ({ ...b, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/books/${bookId}`, books);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col gap-2.5 items-center min-h-screen justify-center">
      <h1 className="text-3xl font-bold mb-5">Update the Book</h1>
      <Input placeholder="Title" name="book_title" onChange={handleChange} />
      <Input
        isTextArea
        placeholder="Description"
        name="book_desc"
        onChange={handleChange}
      />
      <Input type="file" name="book_cover" onChange={handleChange} />
      <Input
        type="number"
        placeholder="Price"
        name="book_price"
        onChange={handleChange}
      />
      <Button text="Update" type="update" onClick={handleClick} />
    </div>
  );
};

export default Update;
