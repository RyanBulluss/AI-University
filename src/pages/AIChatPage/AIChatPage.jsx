import { useState, useEffect, useRef } from "react";
import { getOneTeacher } from "../../utilities/teacher-api";
import { useParams } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";
import { sendQuestion } from "../../utilities/aiChat-api";


export default function AIChatPage( {user} ) {
  const [teacher, setTeacher] = useState({ name: "" });
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const teacherId = useParams();

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever new messages are added
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth'
    });
  }, [messages]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log('hello')

    const chat = await sendQuestion({
      text: newMessage,
      userId: user._id, 
      teacherId: teacherId.id
    })
    console.log(chat)
    setMessages(chat.logs)

    setNewMessage('');
  }


  useEffect(() => {
    async function getTeacher() {
      const currentTeacher = await getOneTeacher(teacherId.id);
      setTeacher(currentTeacher);
    }

    getTeacher();
  }, [teacherId]);

  return (
    <div className="h-[100vh] mx-auto max-w-4xl w-full flex flex-col">
      <ChatTop recipient={teacher} user={user} />
      <div className="flex-grow mx-4 overflow-y-auto chat-scrollbar my-28" ref={chatContainerRef}>
       
      </div>
      <ChatBottom
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
