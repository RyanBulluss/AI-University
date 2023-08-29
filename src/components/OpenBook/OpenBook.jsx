import NoteView from "../NoteView/NoteView";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FaPlus, FaTrash } from "react-icons/fa";
import NoteForm from "../NoteForm/NoteForm";

export default function OpenBook({ book, setSelectedId, subjects }) {
  const [form, setForm] = useState(false);

  return (
    <div className="bg-fourth p-3 rounded-lg">
      <div className="flex items-center justify-between">
        <button className="text-4xl m-4 " onClick={() => setSelectedId(null)}>
          <FiChevronLeft />
        </button>
        <h1 className="text-4xl text-center font-bold">
          {book.title} {book.icon}
        </h1>
        <div className="text-3xl m-4 flex gap-2 cursor-pointer">
          <FaPlus onClick={() => setForm(!form)} />
          <FaTrash />
        </div>
      </div>
      {form && <NoteForm subjects={subjects} />}
      {book.notes.length < 1 && <h1 className="text-center text-2xl p-5">Notebook empty!</h1>}
      {book.notes.map((note, idx) => (
        <NoteView note={note} key={idx} page={idx + 1} />
      ))}
    </div>
  );
}
