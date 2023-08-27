import {  FiSend } from "react-icons/fi";

export default function ChatBottom() {
  return (
    <form className="h-28 border-t mx-4 border-fourth flex items-center">
      <input
        className="text-xl p-3 ml-6 w-full bg-fourth rounded-lg flex-grow"
        type="text"
        placeholder="Type a message"
      />
      <button type="submit" className="text-3xl mx-6">
        <FiSend />
      </button>
    </form>
  );
}
