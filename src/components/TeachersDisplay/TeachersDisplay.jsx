import { useState, useEffect } from "react";

export default function TeachersDisplay({
  teachers,
  subjectFilter,
  searchFilter,
}) {
  const [filteredTeachers, setFilteredTeachers] = useState([]);


  useEffect(() => {
    if (subjectFilter !== "all") {
      const newTeachers = teachers.filter(
        (teacher) => teacher.subject.name === subjectFilter
      );
      setFilteredTeachers(newTeachers);
    } else {
      setFilteredTeachers(teachers);
    }
  }, [subjectFilter, teachers]);

  useEffect(() => {
    if (searchFilter.length < 1) return;
    const newTeachers = teachers.filter((teacher) => {
      if (teacher.name.toLowerCase().includes(searchFilter.toLowerCase()))
        return teacher;
    });
    setFilteredTeachers(newTeachers);
  }, [searchFilter]);

  return (
    <div className="flex flex-wrap gap-4">
      {filteredTeachers.map((teacher, idx) => (
        <div
          key={idx}
          className="bg-fourth w-[200px] flex flex-col justify-center items-center p-5 rounded-2xl "
        >
          <div className="rounded-2xl overflow-hidden w-40">
            <img src={teacher.image} className="w-40" alt="teacher" />
          </div>
          <h3 className="mt-2 text-lg font-semibold text-center">
            {teacher.name}
          </h3>
          <h4 className="m-2 text-md font-semibold text-center">
            {teacher.subject.name}
          </h4>
        </div>
      ))}
    </div>
  );
}
