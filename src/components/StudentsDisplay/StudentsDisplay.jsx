import { useState, useEffect } from "react";

export default function TeachersDisplay({ students, searchFilter }) {
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
        <div
          key={idx}
          className="bg-fourth w-[200px] flex flex-col justify-center items-center p-5 rounded-2xl "
        >
          <div className="rounded-2xl overflow-hidden w-40">
            <img src={student.image} className="w-40" alt="student" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-center">
            {student.name}
          </h3>
          <h3 className="mt-2 text-md font-semibold text-center">
            {student.email}
          </h3>
          <h4 className="m-2 text-md font-semibold text-center">
            {student.premium ? 'Premium Account' : 'Basic account'}
          </h4>
        </div>
      ))}
    </div>
  );
}
