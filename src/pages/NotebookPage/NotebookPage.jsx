import { useEffect, useState } from "react";
import { getAllSubjects } from "../../utilities/subject-api";
import SearchBar from "../../components/SearchBar/SearchBar";
import NotebookDisplay from "../../components/NotebookDisplay/NotebookDisplay";
import { getUserNotebooks } from "../../utilities/notebook-api";
import OpenBook from "../../components/OpenBook/OpenBook";

export default function NotebookPage({ user }) {
  const [subjects, setSubjects] = useState([]);
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");

  const [notebooks, setNotebooks] = useState([]);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    async function getNotebooks() {
      const newNotebooks = await getUserNotebooks(user._id);
      setNotebooks(newNotebooks);
    }
    getNotebooks();
  }, []);

  useEffect(() => {
    async function allData() {
      const dbSubjects = await getAllSubjects();
      setSubjects(dbSubjects);
    }
    allData();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    setSearch("");
  }

  return (
    <div>
      <SearchBar
        handleSubmit={handleSubmit}
        search={search}
        setSearch={setSearch}
      />
      {selectedId ? (
        <div className="my-5">
          <OpenBook user={user} notebooks={notebooks} setNotebooks={setNotebooks} setSelectedId={setSelectedId} subjects={subjects} book={notebooks.find(book => book._id === selectedId)} />
        </div>
      ) : (
        <NotebookDisplay
          setSelectedId={setSelectedId}
          subjects={subjects}
          notebooks={notebooks}
          setNotebooks={setNotebooks}
          filter={filter}
          user={user}
        />
      )}
    </div>
  );
}
