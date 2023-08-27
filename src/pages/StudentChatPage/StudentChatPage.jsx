import { useState, useEffect } from "react";
import { getOneStudent } from "../../utilities/users-api";
import { useParams, Link } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";

export default function StudentChatPage( {user} ) {
  const [student, setStudent] = useState({ name: "" });

  const studentId = useParams();

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
      <ChatBottom />
    </div>
  );
}