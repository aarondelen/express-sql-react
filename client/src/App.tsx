import "./App.css";
import { Routes, Route } from "react-router-dom";
import Books from "./pages/Books.tsx";
import Add from "./pages/Add.tsx";
import Update from "./pages/Update.tsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
