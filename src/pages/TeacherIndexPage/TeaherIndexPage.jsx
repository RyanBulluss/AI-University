export default function TeacherIndexPage() {
  const subjects = [
    "Engineering",
    "Philosophy",
    "Psychology",
    "Computer Science",
    "Engineering",
    "Philosophy",
    "Psychology",
    "Computer Science",
  ];

  return (
    <div className="w-full">
      <form>
        <input
          type="search"
          placeholder="Search..."
          className="bg-fourth w-full p-2 rounded-lg"
        />
      </form>
      <div className="flex my-3 gap-3 overflow-hidden">
        {subjects.map((subject, idx) => (
          <div
            key={idx}
            className="p-2 bg-fourth rounded-lg flex items-center justify-center text-center"
          >
            {subject}
          </div>
        ))}
      </div>
    </div>
  );
}
