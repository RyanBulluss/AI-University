import { useState, useEffect } from "react";
import { getAllStudents } from "../../utilities/users-api";
import StudentsDisplay from "../../components/StudentsDisplay/StudentsDisplay"

export default function StudentIndexPage() {
  const [students, setStudents] = useState([])
  const [searchFilter, setSearchFilter] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function allData() {
        const dbStudents = await getAllStudents();
        setStudents(dbStudents);
    }
    allData();
  }, [])

  function handleSubmit(e) {
    e.preventDefault();
    setSearchFilter(search)
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
      <StudentsDisplay students={students} searchFilter={searchFilter} />
    </div>
  );
}