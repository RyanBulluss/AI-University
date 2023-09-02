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
    <div className="flex flex-wrap gap-3 mt-5">
      {filteredStudents.map((student, idx) => (
        <Link
          to={`/student/chat/${student._id}`}
          key={idx}
          className={`bg-fourth hover:opacity-75 md:w-[200px] w-[160px] flex flex-col justify-center items-center p-5 rounded-2xl `}
        >
          <div className="rounded-2xl overflow-hidden md:w-40">
            <img src={student.image} className="w-40" alt="student" />
          </div>
          <h3 className="mt-2 text-xl font-bold text-center">
            {student.name}
          </h3>
          <UserIcons student={student} user={user} />
          


          
          
        </Link>
      ))}
    </div>
  );
}
