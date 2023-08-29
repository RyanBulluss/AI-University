import SubmitButton from "../SubmitButton/SubmitButton";

export default function NoteForm({ subjects }) {
  return (
    <form className="bg-third p-5 m-3 border flex flex-col">
      <h1 className="text-center text-2xl m-3">New Note</h1>
      <label className="text-white dark:text-gray-200">Title</label>
      <input
        required
        name="name"
        type="text"
        className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
      />
      <label className="text-white mt-3 dark:text-gray-200">Content</label>
      <textarea
        required
        name="name"
        type="textarea"
        className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
      />
      <label className="text-white mt-3 dark:text-gray-200">Subject</label>
      <select className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white">
        {subjects.map((subject, idx) => (
          <option value={subject._id}>{subject.name}</option>
        ))}
      </select>
      <SubmitButton buttonText={"Create Note"} />
    </form>
  );
}
