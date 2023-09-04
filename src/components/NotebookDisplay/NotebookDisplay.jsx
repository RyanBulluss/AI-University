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
  const [form, setForm] = useState(false);

  function handleNewBook() {
    setForm(!form);
  }

  return (
    <div>
      {form && (
        <NotebookForm
          setNotebooks={setNotebooks}
          notebooks={notebooks}
          form={form}
          setForm={setForm}
        />
      )}
      <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        <div
          className={`${form ? 'bg-fifth' : 'bg-fourth'} hover:opacity-75 h-64 text-2xl text-center rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2`}
          onClick={handleNewBook}
        >
          <FaPlus className="text-4xl" />
          <h1>
            Create New <br /> Notebook
          </h1>
        </div>
        {notebooks.map((book, idx) => (
          <div
            onClick={() => setSelectedId(book._id)}
            key={idx}
            className="bg-fourth hover:opacity-75 h-64 text-center rounded-xl cursor-pointer flex flex-col items-center justify-center gap-2"
          >
            <h1 className="text-6xl">{book.icon}</h1>
            <h2 className="text-2xl m-3">{book.title}</h2>
            <h3 className="text-gray-300">Pages: {book.notes.length}</h3>
            {book.published && <h3 className="text-gray-300">Published ✔️</h3>}
          </div>
        ))}
      </div>
    </div>
  );
}
