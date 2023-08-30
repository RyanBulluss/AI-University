import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";
import { createNote } from "../../utilities/note-api";
import { getUserNotebooks } from "../../utilities/notebook-api";

export default function NoteForm({ setForm, subjects, notebookId, user, setNotebooks }) {
  const [noteForm, setNoteForm] = useState({
    notebookId: notebookId,
    title: "",
    text: "",
    credit: user.name,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    await createNote(noteForm);
    const updatedNotes = await getUserNotebooks(user._id);
    setNotebooks(updatedNotes);
    setForm(false);
    setNoteForm({
      notebookId: notebookId,
      title: "",
      text: "",
      subjectId: subjects[0]._id,
      credit: user.name,
    });
  }

  async function handleChange(e) {
    setNoteForm({...noteForm, [e.target.name]: e.target.value })
  }

  return (
    <form
      className="bg-third p-5 m-3 border flex flex-col"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-2xl m-3">New Note</h1>
      <label className="text-white dark:text-gray-200">Title</label>
      <input
        onChange={handleChange}
        value={noteForm.title}
        required
        name="title"
        type="text"
        className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
      />
      <label className="text-white mt-3 dark:text-gray-200">Content</label>
      <textarea
        onChange={handleChange}
        value={noteForm.text}
        required
        name="text"
        type="textarea"
        className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
      />
      <SubmitButton buttonText={"Create Note"} />
    </form>
  );
}
