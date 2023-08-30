import { getAllSubjects } from "../../utilities/subject-api";
import { useEffect, useState } from "react";
import TeacherForm from "../../components/TeacherForm/TeacherForm"

export default function CreateTeacherPage() {
  const [subjects, setSubjects] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    subject: "",
    instructions: "",
    seed: "",
  });



  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      setSubjects(dbSubjects);
      setFormData({...formData, subject: dbSubjects[0]._id})
    }

    allData();
  }, []);


  return (
    <div className="max-w-7xl mx-auto">
      <TeacherForm subjects={subjects} formData={formData} setFormData={setFormData} />

    </div>
  );
}
