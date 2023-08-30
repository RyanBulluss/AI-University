import NoteView from "../NoteView/NoteView";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import NoteForm from "../NoteForm/NoteForm";
import { deleteNotebook } from "../../utilities/notebook-api";
import { getUserNotebooks } from "../../utilities/notebook-api";

export default function OpenBook({ user, book, setSelectedId, subjects, notebooks, setNotebooks }) {
  const [form, setForm] = useState(false);


  async function deleteBook() {
    const complete = await deleteNotebook(book._id);
    if (!complete) return
    const newNotebooks = await getUserNotebooks( user._id )
    setNotebooks(newNotebooks);
    setSelectedId(null);
  }

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
          {form && <FaMinus onClick={() => setForm(!form)} />}
          {!form && <FaPlus onClick={() => setForm(!form)} />}
          <FaTrash onClick={deleteBook} />
        </div>
      </div>
      {form && <NoteForm setForm={setForm} setNotebooks={setNotebooks} book={book} subjects={subjects} notebookId={book._id} user={user} />}
      {book.notes.length < 1 && <h1 className="text-center text-2xl p-5">Notebook empty!</h1>}
      {book.notes.map((note, idx) => (
        <NoteView user={user} setNotebooks={setNotebooks} book={book} note={note} key={idx} page={idx + 1} />
      ))}
    </div>
  );
}
