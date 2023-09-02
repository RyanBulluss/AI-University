import { FiSend, FiEdit, FiBookOpen, FiChevronLeft } from "react-icons/fi";
import { useState, useEffect } from "react";
import { getUserNotebooks } from "../../utilities/notebook-api";
import SubmitButton from "../SubmitButton/SubmitButton";
import { createNote } from "../../utilities/note-api";
import { Link } from "react-router-dom";

export default function ChatBottom({
  teacher,
  user,
  newMessage,
  setNewMessage,
  handleSubmit,
  showForm,
  setShowForm,
}) {
  const [notebooks, setNotebooks] = useState([]);
  const [note, setNote] = useState();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    async function getNotebooks() {
      const getNotebooks = await getUserNotebooks(user._id);
      if (getNotebooks.length) {
        await setNotebooks(getNotebooks);
        setNote({ notebookId: getNotebooks[0]._id, title: "", text: "" });
      }
    }
    getNotebooks();
  }, []);

  async function handleNote(e) {
    e.preventDefault();
    let newNote = note;
    setNote({ notebookId: notebooks[0]._id, title: "", text: "" });
    newNote.credit = teacher.name;
    console.log(newNote);
    const res = await createNote(newNote);
    setSuccess(!!res);
    setTimeout(() => setSuccess(false), 2000);
  }

  function handleChange(e) {
    setNote({ ...note, [e.target.name]: e.target.value });
  }

  return (
    <>
      {showForm && (
        <form
          onSubmit={handleNote}
          className="h-56 fixed bottom-0 w-full max-w-4xl bg-third border-t border-fourth flex items-center"
        >
          {!!notebooks.length && (
            <div className="w-full mr-2 ml-1 sm:mx-6">
              <div className="flex">
                <select
                  value={note.notebookId}
                  onChange={handleChange}
                  name="notebookId"
                  className="p-2 mr-2 w-28 sm:w-40 border border-fifth rounded-md bg-fourth focus:border-white"
                >
                  {notebooks.map((notebook, idx) => (
                    <option key={idx} value={notebook._id}>
                      {notebook.icon} {notebook.title}
                    </option>
                  ))}
                </select>
                <input
                  maxlength={30}
                  className="text-xl p-2 border bg-fourth border-fifth rounded-lg flex-grow"
                  type="title"
                  name="title"
                  value={note.title}
                  onChange={handleChange}
                  placeholder="Title"
                />
              </div>
              <textarea
                value={note.text}
                onChange={handleChange}
                placeholder="Write or paste your notes here"
                required
                name="text"
                className="px-4 py-2 mt-2 w-full custom-user-drag border border-fifth rounded-md bg-fourth focus:border-white"
              />
              <div className="flex justify-between">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="text-3xl"
                >
                  <FiChevronLeft />
                </button>
                {success && (
                  <h4 className="px-6 py-2 my-3 text-second">Note Saved ✔️</h4>
                )}
                <SubmitButton buttonText={"Add Note"} />
              </div>
            </div>
          )}
          {showForm && !notebooks.length && (
            <div className="w-full flex flex-col items-center justify-center">
              <h1 className="text-center font-semibold w-full text-4xl">
                You have no notebooks!
              </h1>
              <div className="flex">
                <button
                  onClick={() => setShowForm(!showForm)}
                  className="text-3xl float-left"
                >
                  <FiChevronLeft />
                </button>
                <Link to="/notebook" className="py-2 px-4 bg-first hover:bg-first/75 rounded-full m-3">
                  Create Notebook
                </Link>
              </div>
            </div>
          )}
        </form>
      )}
      {!showForm && (
        <form
          onSubmit={handleSubmit}
          className="h-28 fixed bottom-0 w-full max-w-4xl bg-third border-t border-fourth flex items-center"
        >
          <a
            onClick={() => setShowForm(!showForm)}
            className="text-3xl mx-6 cursor-pointer"
          >
            <FiBookOpen />
          </a>
          <input
            required
            className="text-xl p-3 w-full bg-fourth rounded-lg flex-grow"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message"
          />
          <button type="submit" className="text-3xl mx-6">
            <FiSend />
          </button>
        </form>
      )}
    </>
  );
}
