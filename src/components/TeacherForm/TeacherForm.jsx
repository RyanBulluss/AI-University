import { useEffect, useState } from "react";

export default function TeacherForm({ subjects }) {
  const [formData, setFormData] = useState({
    name: 'hello', image: '', description: 'hello',
    subject: 'hello', instructions: 'hello', seed: 'hello'
  });

  useEffect(() => console.log(formData))

  function handleChange(e, input) {
    const newData = formData;
    newData[input] = e.target.value;
    setFormData(newData);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-2xl overflow-hidden w-40 mt-20">
        <img
          src={
            formData.image ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="teacher"
        />
      </div>
      <section className="p-2 mx-auto rounded-md mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Teacher Details
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">
                Name
              </label>
              <input
                value={formData.name}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Image
              </label>
              <input
                value={formData.image}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Description
              </label>
              <input
                value={formData.description}
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
              >
                Subject
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {subjects.map((subject, idx) => (
                  <option key={idx} value={subject.name}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
              >
                Instructions
              </label>
              <textarea
                value={formData.instructions}
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <label
                className="text-white dark:text-gray-200"
              >
                Seed
              </label>
              <textarea
                onChange={(e) => handleChange(e, 'seed')}
                value={formData.seed}
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-first rounded-md hover:bg-second focus:outline-none focus:bg-first/30">
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
