import { useState, useEffect } from "react";
import { getAllStudents } from "../../utilities/users-api";
import StudentsDisplay from "../../components/StudentsDisplay/StudentsDisplay"
import SearchBar from "../../components/SearchBar/SearchBar";

export default function StudentIndexPage( {user} ) {
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
      <SearchBar handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <StudentsDisplay students={students} searchFilter={searchFilter} user={user} />
    </div>
  );
}