import { useState, useEffect, useRef } from "react";
import { getOneStudent } from "../../utilities/users-api";
import { useParams } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";
import { sendMessage, getMessages } from "../../utilities/userChat-api";
import { format } from "date-fns";

export default function StudentChatPage({ user }) {
  const [student, setStudent] = useState({ name: "" });
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const studentId = useParams();

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
    const chat = await sendMessage({
      text: newMessage,
      senderId: user._id,
      receiverId: studentId.id,
    });
    console.log(chat);
    setMessages(chat.logs);
    setNewMessage("");
  }

  useEffect(() => {
    async function getStudent() {
      const chat = await getMessages({
        senderId: user._id,
        receiverId: studentId.id,
      });
      if (!chat) return;
      setMessages(chat.logs);
    }

    getStudent();
  }, [user._id, studentId.id]);

  useEffect(() => {
    async function getStudent() {
      const currentStudent = await getOneStudent(studentId.id);
      setStudent(currentStudent);
    }

    getStudent();
  }, [studentId]);

  return (
    <div className="h-[100vh] mx-auto max-w-4xl w-full flex flex-col">
      <ChatTop recipient={student} user={user} />
      <div className="flex-grow mx-4 overflow-y-auto chat-scrollbar my-28" ref={chatContainerRef}>
        {messages.map((message, idx) =>
          message.sender === user._id ? (
            <div className="flex items-center justify-end">
              <h4>{format(new Date(message.createdAt), "h:mm a")}</h4>
              <h3 className="bg-blue-400 w-3/5 rounded-l-2xl rounded-t-2xl p-3 m-3 text-2xl">
                {message.text}
              </h3>
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img src={user.image} alt="profile" />
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-start">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img src={student.image} alt="profile" />
              </div>
              <h3 className="bg-second/60 w-3/5 rounded-r-2xl rounded-t-2xl p-3 m-3 text-2xl">
                {message.text}
              </h3>
              <h4>{format(new Date(message.createdAt), "h:mm a")}</h4>
            </div>
          )
        )}
      </div>
      <ChatBottom
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
