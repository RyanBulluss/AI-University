import { useState, useEffect } from "react";
import { getAllSubjects } from "../../utilities/subject-api";
import { getAllTeachers } from "../../utilities/teacher-api";
import SubjectsDisplay from "../../components/SubjectsDisplay/SubjectsDisplay";
import TeachersDisplay from "../../components/TeachersDisplay/TeachersDisplay";
import SearchBar from "../../components/SearchBar/SearchBar";


export default function TeacherIndexPage() {
  const [teachers, setTeachers] = useState([])
  const [subjects, setSubjects] = useState([])
  const [filter, setFilter] = useState({type: 'subject', filter: ''});
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      const dbTeachers = await getAllTeachers();
      dbTeachers.forEach(teacher => {
        if(teacher.aiImage) {
          console.log(teacher.aiImage.data)
          const bufferData = teacher.aiImage.data; // Array of numbers
          const uint8Array = new Uint8Array(bufferData); // Convert to Uint8Array
          const base64ImageData = uint8Array.reduce((data, byte) => data + String.fromCharCode(byte), ''); // Convert to Base64 string
          const dataUrl = `data:image/jpeg;base64,${base64ImageData}`;
          const spacedImage = dataUrl.split(',')[1]
          teacher.aiImage = `../../../${spacedImage}`
          console.log(teacher.aiImage)
        }
      })
      setSubjects(dbSubjects)
      setTeachers(dbTeachers)
    }
    allData();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    setFilter({type: 'search', filter: search})
    setSearch('')
  }

  return (
    <div className="w-full">
      <SearchBar handleSubmit={handleSubmit} search={search} setSearch={setSearch}  />
      <SubjectsDisplay subjects={subjects} setFilter={setFilter} />
      <TeachersDisplay teachers={teachers} filter={filter} />
    </div>
  );
}
