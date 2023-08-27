import { useState, useEffect } from "react";
import { getAllSubjects } from "../../utilities/subject-api";
import { getAllTeachers } from "../../utilities/teacher-api";
import SubjectsDisplay from "../../components/SubjectsDisplay/SubjectsDisplay";
import TeachersDisplay from "../../components/TeachersDisplay/TeachersDisplay";


export default function TeacherIndexPage() {
  const [subjects, setSubjects] = useState([])
  const [teachers, setTeachers] = useState([])
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
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="search"
          placeholder="Search..."
          className="bg-fourth w-full p-2 rounded-lg"
        />
      </form>
      <SubjectsDisplay subjects={subjects} setFilter={setFilter} />
      <TeachersDisplay teachers={teachers} filter={filter} />
    </div>
  );
}
