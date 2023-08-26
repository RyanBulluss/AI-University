import { useState, useEffect } from "react";
import { getOneTeacher } from "../../utilities/teacher-api";
import { useParams, Link } from "react-router-dom";
import { FiChevronLeft, FiMoreVertical, FiSend  } from "react-icons/fi";

export default function AIChatPage() {
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
      <div className="h-28 flex items-center mx-4 border-b border-fourth shadow-md">
        <Link className="text-4xl m-4" to='/'>
          <FiChevronLeft />
        </Link>
        <div className="flex-grow flex mx-4">
          <div className="w-20 h-20 overflow-hidden rounded-3xl">
            <img src={teacher.image} alt="teacher" />
          </div>
          <div className="flex flex-col justify-center mx-4">
            <h3 className="text-lg font-semibold">{teacher.name}</h3>
            <h4 className="text-sm text-gray-400">{teacher.description}</h4>
          </div>
        </div>
        <div className="text-3xl m-4">
          <FiMoreVertical />
        </div>
      </div>
      <div className="flex-grow mx-4">

      </div>
      <form className="h-28 border-t mx-4 border-fourth flex items-center">
        <input
        className="text-xl p-3 ml-6 w-full bg-fourth rounded-lg flex-grow"
        type="text" placeholder="Type a message" />
        <button type="submit" className="text-3xl mx-6">
          <FiSend />
        </button>
      </form>
    </div>
  );
}
