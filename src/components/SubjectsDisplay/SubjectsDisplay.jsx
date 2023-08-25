

export default function SubjectsDisplay ( {subjects} ) {


    return (
        <div className="flex w-full space-x-3 mb-5 overflow-x-auto scrollbar">
        {subjects.map((subject, idx) => (
          <button
            key={idx}
            className="flex items-center justify-center text-xs md:text-sm my-3
            px-2 md:px-4 py-2 md:py-3 rounded-md bg-fourth hover:opacity-75 transition"
          >
            {subject.name}
          </button>
        ))}
      </div>
    )
}