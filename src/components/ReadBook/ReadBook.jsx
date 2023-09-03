import { FiChevronLeft } from "react-icons/fi";

export default function ReadBook({ book, setSelected }) {
  return (
    <div className="bg-fourth p-3 rounded-lg">
      <div className="flex items-center justify-between mt-5 mb-10">
        <button className="text-4xl m-4 " onClick={() => setSelected(null)}>
          <FiChevronLeft />
        </button>
        <h1 className="text-4xl text-center m-4 font-bold">{book.title}</h1>
        <div className="flex"> 
        <h1 className="text-4xl text-center my-4 font-bold">{book.icon}</h1>
        <h1 className="text-4xl text-center my-4 font-bold">{book.icon}</h1>
        </div>
      </div>
      {book.notes.length < 1 && (
        <h1 className="text-center text-2xl p-5">Book Empty!</h1>
      )}
      {book.notes.map((note, idx) => (
        <div className="border bg-fifth m-3 p-3 flex justify-between items-bottom">
          <div>
            <h3 className="text-3xl font-semibold">{note.title}</h3>
            <p className="my-3 text-xl">{note.text}</p>
            <p className="text-gray-300">By: {note.credit}</p>
          </div>
          <div className="flex flex-col justify-between items-end">
            <p>{idx + 1}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
