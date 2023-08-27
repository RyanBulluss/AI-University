import {  FiSend } from "react-icons/fi";

export default function ChatBottom( {newMessage, setNewMessage, handleSubmit} ) {


  return (
    <form onSubmit={handleSubmit} className="h-28 fixed bottom-0 w-full max-w-4xl bg-third border-t border-fourth flex items-center">
      <input
        className="text-xl p-3 ml-6 w-full bg-fourth rounded-lg flex-grow"
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message"
      />
      <button type="submit" className="text-3xl mx-6">
        <FiSend />
      </button>
    </form>
  );
}