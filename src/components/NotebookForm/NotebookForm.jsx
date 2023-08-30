import SubmitButton from "../SubmitButton/SubmitButton";
import { useState } from "react";
import { createNotebook } from "../../utilities/notebook-api";

export default function NotebookForm( {setNotebooks, notebooks, form, setForm}) {
  const [title, setTitle] = useState("");
  const [icon, setIcon] = useState("📘");

  const icons = [
    "📘",
    "📗",
    "📙",
    "📕",
    "📒",
    "🔢",
    "🗺️",
    "🧪",
    "👨‍🍳",
    "🧠",
    "👩‍🔬",
    "👨‍💻",
    "⚽",
    "🎨",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    const newNotebook = await createNotebook( {title: title, icon: icon} )
    setNotebooks([...notebooks, newNotebook])
    setForm(!form);
  }

  return (
    <form
      className="my-5 flex justify-between flex-wrap"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col w-[75%]">
        <label className="text-white dark:text-gray-200">Notebook Title</label>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          name="name"
          type="text"
          className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
        />
      </div>
      <div className="flex flex-col ml-4 w-1/5">
        <label className="text-white dark:text-gray-200">Icon</label>
        <select className="px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white"
        value={icon}
        onChange={(e) => setIcon(e.target.value)}>
          {icons.map((icon, idx) => (
            <option key={idx} value={icon}>{icon}</option>
          ))}
        </select>
      </div>
      <div className="flex justify-end">
        <SubmitButton buttonText={"Create Notebook"} />
      </div>
    </form>
  );
}
