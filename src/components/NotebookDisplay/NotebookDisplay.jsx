import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import NotebookForm from "../NotebookForm/NotebookForm";

export default function NotebookDisplay({
  subjects,
  filter,
  setNotebooks,
  notebooks,
  setSelectedId,
}) {

  const [form, setForm] = useState(false)

  function handleNewBook() {
    setForm(!form);
  }

  return (
    <div>
      {form && <NotebookForm setNotebooks={setNotebooks} notebooks={notebooks} form={form} setForm={setForm} />}
    <div className="my-5 flex flex-wrap">
      <div className="bg-fourth hover:bg-fifth h-64 w-64 text-2xl text-center rounded-xl m-3 cursor-pointer flex flex-col items-center justify-center gap-2"
      onClick={handleNewBook}>
        <FaPlus className="text-4xl" />
        <h1>
          Create New <br /> Notebook
        </h1>
      </div>
      {notebooks.map((book, idx) => (
        <div
          onClick={() => setSelectedId(book._id)}
          key={idx}
          className="bg-fourth hover:bg-fifth h-64 w-64 rounded-xl m-3 cursor-pointer flex flex-col items-center justify-center gap-2"
        >
          <h1 className="text-6xl">{book.icon}</h1>
          <h2 className="text-2xl">{book.title}</h2>
          <h3>Pages: {book.notes.length}</h3>
          <h3>{book.favorite ? "star" : "empty star"}</h3>
        </div>
      ))}
    </div>
    </div>
  );
}
