import { useState, useEffect, useRef } from "react";
import { getOneStudent } from "../../utilities/users-api";
import { useParams } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";
import { sendMessage, getMessages } from "../../utilities/userChat-api";
import ChatBody from "../../components/ChatBody/ChatBody";

export default function StudentChatPage({ user }) {
  const [student, setStudent] = useState({ name: "" });
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const studentId = useParams();

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
      <ChatBody user={user} messages={messages} recipient={student} />
      <ChatBottom newMessage={newMessage} setNewMessage={setNewMessage} handleSubmit={handleSubmit} />
    </div>
  );
}
