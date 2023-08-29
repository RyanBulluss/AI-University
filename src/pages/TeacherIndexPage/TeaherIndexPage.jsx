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
