import { useState, useEffect } from "react";
import { getOneStudent } from "../../utilities/users-api";
import { useParams, Link } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";
import { sendMessage } from "../../utilities/userChat-api";

export default function StudentChatPage( {user} ) {
  const [student, setStudent] = useState({ name: "" });
  const [newMessage, setNewMessage] = useState('')

  const studentId = useParams();

  function handleSubmit(e) {
    e.preventDefault();
    sendMessage({text: newMessage, senderId: user._id, receiverId: studentId.id});

    setNewMessage('')
  }

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
      <div className="flex-grow mx-4">

      </div>
      <ChatBottom newMessage={newMessage} setNewMessage={setNewMessage} handleSubmit={handleSubmit} />
    </div>
  );
}