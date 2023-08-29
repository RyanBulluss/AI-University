import { useEffect, useState } from "react";
import { getAllSubjects } from "../../utilities/subject-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotebookDisplay from "../../components/NotebookDisplay/NotebookDisplay";

export default function NotebookPage() {
  const [subjects, setSubjects] = useState([])
  const [filter, setFilter] = useState({type: 'subject', filter: ''});
  const [search, setSearch] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('submitted')
    setSearch('');
  }

  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      setSubjects(dbSubjects)
    }
    allData();
  }, [])

  return (
    <div>
      <SearchBar handleSubmit={handleSubmit} search={search} setSearch={setSearch} />
      <NotebookDisplay subjects={subjects} filter={filter} />
    </div>
  );
}
