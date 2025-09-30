import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [books, setBooks] = useState({
    book_title: "",
    book_description: "",
    book_cover: "",
    book_price: null,
  });

  const handleChange = (e: any) => {
    setBooks((b) => ({ ...b, [e.target.name]: e.target.value }));
  };

  const navigate = useNavigate();

  const handleClick = async (e: any) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/books`, books);
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="book_title"
      />
      <input
        type="text"
        placeholder="desc"
        onChange={handleChange}
        name="book_desc"
      />
      <input
        type="text"
        placeholder="cover"
        onChange={handleChange}
        name="book_cover"
      />
      <input
        type="number"
        placeholder="price"
        onChange={handleChange}
        name="book_price"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default Add;
