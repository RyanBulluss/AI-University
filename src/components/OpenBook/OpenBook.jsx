import NoteView from "../NoteView/NoteView";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

export default function OpenBook({ book, setSelectedId }) {
  const [page, setPage] = useState(0);

  return (
    <div className="bg-fourth p-3 rounded-lg">
      <div className="flex items-center justify-center">
        <button className="text-4xl my-4 " onClick={() => setSelectedId(null)}>
          <FiChevronLeft />
        </button>
        <h1 className="text-4xl text-center font-bold">
          {book.title} {book.icon}
        </h1>
      </div>
      {book.notes.map((note, idx) => (
        <NoteView note={note} key={idx} page={idx + 1} />
      ))}
    </div>
  );
}
