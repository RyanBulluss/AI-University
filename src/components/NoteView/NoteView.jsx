import { FaTrash } from "react-icons/fa";
import { deleteNote } from "../../utilities/note-api";
import { getUserNotebooks } from "../../utilities/notebook-api";

export default function NoteView({ user, note, page, book, setNotebooks }) {

  async function handleDelete() {
    await deleteNote(book._id, note._id);
    const newNotebooks = await getUserNotebooks(user._id);
    setNotebooks(newNotebooks);
  }

  return (
    <div className="border bg-fifth m-3 p-3 flex justify-between items-bottom">
      <div>
        <h3 className="text-3xl font-semibold">{note.title}</h3>
        <p className="my-3 text-xl">{note.text}</p>
        <p className="text-gray-300">By: {note.credit}</p>
      </div>
      <div className="flex flex-col justify-between items-end">
        <p>{page}</p>
        <button onClick={handleDelete}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
