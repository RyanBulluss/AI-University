import { useState, useEffect } from "react";
import { getOneTeacher } from "../../utilities/teacher-api";
import { useLocation, useParams } from "react-router-dom";

export default function AIChatPage() {
  const [teacher, setTeacher] = useState({ name: "" });

  const teacherId = useParams();

  useEffect(() => {
    async function getTeacher() {
      const currentTeacher = await getOneTeacher(teacherId.id);
      setTeacher(currentTeacher);
    }

    getTeacher();
  }, []);

  return <h1>{teacher.name}</h1>;
}
