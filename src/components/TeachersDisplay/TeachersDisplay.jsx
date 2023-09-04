import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TeachersDisplay({
  teachers,
  filter,
}) {
  const [filteredTeachers, setFilteredTeachers] = useState([]);


  useEffect(() => {
    let newTeachers;
    if (filter.filter === "") {
      newTeachers = teachers;
    } else if (filter.type === 'subject') {
      newTeachers = teachers.filter(
        (teacher) => teacher.subject.name === filter.filter
      );
    } else {
      newTeachers = teachers.filter((teacher) => {
        if (teacher.name.toLowerCase().includes(filter.filter.toLowerCase()))
          return teacher;
      });
    }
    setFilteredTeachers(newTeachers);
  }, [filter, teachers]);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-4">
      {filteredTeachers.map((teacher, idx) => (
        <Link
          to={`/teacher/chat/${teacher._id}`}
          key={idx}
          className="bg-fourth hover:opacity-75 flex flex-col justify-center items-center p-5 rounded-2xl "
        >
          <div className="rounded-2xl overflow-hidden  ">
            <img src={teacher.image} className="" alt="teacher" />
          </div>
          
          <h3 className="mt-2 text-md md:text-lg font-semibold text-center">
            {teacher.name}
          </h3>
          <h4 className="m-2 text-sm md:text-md text-gray-300 font-semibold text-center">
            {teacher.subject.name}
          </h4>
        </Link>
      ))}
    </div>
  );
}
