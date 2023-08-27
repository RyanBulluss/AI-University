import { useState } from "react";
import { createTeacher } from "../../utilities/teacher-api";
import { useNavigate  } from "react-router-dom";

export default function TeacherForm({ subjects }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    description: "",
    subject: "64e8b5010e10f7b2db764f16",
    instructions: "",
    seed: "",
  });

  const [displayImage, setDisplayImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const teacher = await createTeacher(formData);
      console.log(teacher);
      navigate('/')
    } catch {
      console.log("Teacher Creation Failed - Try Again");
    }
  }

  function handleChange(e) {
    setFormData({...formData, [e.target.name]: e.target.value });
  }

  function showImage(e) {
    e.preventDefault();
    setDisplayImage(formData.image);
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-2xl overflow-hidden w-40 mt-5">
        <img
          src={
            displayImage ||
            "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
          alt="teacher"
        />
      </div>
      <section className="p-2 mx-auto w-full rounded-md mt-20">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Teacher Details
        </h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-white dark:text-gray-200">Name</label>
              <input
                required
                name="name"
                onChange={(e) => handleChange(e, "name")}
                value={formData.name}
                type="text"
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200 flex justify-between">
                <span>Image</span>
                <button
                  onClick={showImage}
                  className="bg-first hover:bg-first/80
                rounded-md px-2 border border-fifth"
                >
                  Test Image
                </button>
              </label>
              <input
                required
                name="image"
                onChange={(e) => handleChange(e, "image")}
                value={formData.image}
                type="text"
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Description
              </label>
              <input
                required
                name="description"
                onChange={(e) => handleChange(e, "description")}
                value={formData.description}
                type="text"
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Subject</label>
              <select
                onChange={(e) => handleChange(e, "subject")}
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              >
                {subjects.map((subject, idx) => (
                  <option className="border" key={idx} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">
                Instructions
              </label>
              <textarea
                required
                name="instructions"
                onChange={(e) => handleChange(e, "instructions")}
                value={formData.instructions}
                type="textarea"
                className="w-full px-4 h-40 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              ></textarea>
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Seed</label>
              <textarea
                required
                name="seed"
                value={formData.seed}
                onChange={(e) => handleChange(e, "seed")}
                type="textarea"
                className="w-full px-4 h-40 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              ></textarea>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-first rounded-md hover:bg-second focus:outline-none focus:bg-first/30"
            >
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
