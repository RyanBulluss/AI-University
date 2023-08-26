

export default function SubjectsDisplay({ subjects, setSubjectFilter }) {
  return (
    <div className="flex w-full space-x-3 mb-5 overflow-x-auto scrollbar">
      {subjects.length ? (
        <button
          onClick={() => setSubjectFilter("all")}
          className="flex items-center justify-center text-xs md:text-sm my-3
          px-2 md:px-4 py-2 md:py-3 rounded-md bg-fourth hover:opacity-75 transition"
        >
          All
        </button>
      ) : (
        ""
      )}

      {subjects.map((subject, idx) => (
        <button
          onClick={() => setSubjectFilter(subject.name)}
          key={idx}
          className="flex items-center justify-center text-xs md:text-sm my-3
            px-2 md:px-4 py-2 md:py-3 rounded-md bg-fourth hover:opacity-75 transition"
        >
          {subject.name}
        </button>
      ))}
    </div>
  );
}
