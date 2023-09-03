import chatTime from "../../utilities/chat-time";
import { useState } from "react";
import ReadBook from "../ReadBook/ReadBook";

export default function LibraryBooks({ books }) {
    const [selected, setSelected] = useState(null)

    function handleClick(book) {
        setSelected(book);
    }




  return (
    <div>
        {!selected ? (
        <div className="my-5 flex flex-wrap gap-3">
      {books.map((book, idx) => (
        <div
        onClick={() => handleClick(book)}
          className="bg-fourth hover:opacity-75 cursor-pointer flex flex-col gap-2 items-center w-64 py-10 shadow-xl rounded-xl"
          key={idx}
        >
          <h2 className="text-6xl">{book.icon}</h2>
          <h2 className="m-3 text-2xl">{book.title}</h2>
     
            <div className="rounded-full overflow-hidden w-8">
              <img src={book.user.image} className="" alt="student" />
            </div>
            <h2 className="text-xl">Author: {book.user.name}</h2>

            <h2>Pages: {book.notes.length}</h2>
        </div>
      ))}
    </div>
    ) : (
        <ReadBook book={selected} setSelected={setSelected} />
    ) }
    </div>
    
  );
}
