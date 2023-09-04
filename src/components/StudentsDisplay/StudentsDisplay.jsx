import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserIcons from "../UserIcons/UserIcons";

export default function TeachersDisplay({ students, searchFilter, user }) {
  const [filteredStudents, setFilteredStudents] = useState([]);

  useEffect(() => {
    setFilteredStudents(students);
  }, [students]);

  useEffect(() => {
    let newStudents;
    if (searchFilter.length < 1) {
      newStudents = students;
    } else {
      newStudents = students.filter((student) => {
        if (student.name.toLowerCase().includes(searchFilter.toLowerCase()))
          return student;
      });
    }
    setFilteredStudents(newStudents);
  }, [searchFilter]);

  return (
    <div className="my-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
      {filteredStudents.map((student, idx) => (
        <Link
          to={`/student/chat/${student._id}`}
          key={idx}
          className={`bg-fourth hover:opacity-75 flex flex-col justify-center items-center p-5 rounded-2xl `}
        >
          <div className="rounded-2xl overflow-hidden">
            <img src={student.image} className="" alt="student" />
          </div>
          <h3 className="mt-2 text-xl font-bold text-center">{student.name}</h3>
          <UserIcons student={student} user={user} />
        </Link>
      ))}
    </div>
  );
}
