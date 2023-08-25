import { useState, useEffect } from "react";
import { getAllSubjects } from "../../utilities/subject-api";
import { getAllTeachers } from "../../utilities/teacher-api";
import SubjectsDisplay from "../../components/SubjectsDisplay/SubjectsDisplay";
import TeachersDisplay from "../../components/TeachersDisplay/TeachersDisplay";


export default function TeacherIndexPage() {
  const [subjects, setSubjects] = useState([])
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      const dbTeachers = await getAllTeachers();
      setSubjects(dbSubjects)
      setTeachers(dbTeachers)
      
    }
    


    allData();
  }, [])

  return (
    <div className="w-full">
      <form>
        <input
          type="search"
          placeholder="Search..."
          className="bg-fourth w-full p-2 rounded-lg"
        />
      </form>
      <SubjectsDisplay subjects={subjects} />
      <TeachersDisplay teachers={teachers} />
    </div>
  );
}
