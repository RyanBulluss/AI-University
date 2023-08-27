import { useState, useEffect } from "react";
import { getOneTeacher } from "../../utilities/teacher-api";
import { useParams } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";

export default function AIChatPage( {user} ) {
  const [teacher, setTeacher] = useState({ name: "" });

  const teacherId = useParams();

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
      <div className="flex-grow mx-4">

      </div>
      <ChatBottom />
    </div>
  );
}
