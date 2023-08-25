import { getAllSubjects } from "../../utilities/subject-api";
import { useEffect, useState } from "react";
import TeacherForm from "../../components/TeacherForm/TeacherForm";

export default function CreateTeacherPage() {
  const [subjects, setSubjects] = useState([]);



  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      setSubjects(dbSubjects);
    }

    allData();
  }, []);


  return (
    <TeacherForm subjects={subjects} />
  );
}
