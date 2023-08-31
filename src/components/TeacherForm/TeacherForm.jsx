import { useState } from "react";
import { createTeacher } from "../../utilities/teacher-api";
import { useNavigate } from "react-router-dom";

export default function TeacherForm({ subjects, formData, setFormData }) {
  const navigate = useNavigate();
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);


  const [displayImage, setDisplayImage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setSpinner(true);
      const teacher = await createTeacher(formData);
      console.log(teacher);
      navigate("/");
    } catch {
      console.log("Teacher Creation Failed - Try Again");
      setSpinner(false);
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  }

  async function handleChange(e) {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value }, () =>
      console.log(formData)
    );
    console.log(formData);
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
                onChange={(e) => handleChange(e)}
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
                placeholder="Optional"
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
                onChange={(e) => handleChange(e)}
                value={formData.description}
                type="text"
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              />
            </div>
            <div>
              <label className="text-white dark:text-gray-200">Subject</label>
              <select
                name="subject"
                onChange={(e) => handleChange(e)}
                className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
              >
                {subjects.map((subject, idx) => (
                  <option key={idx} value={subject._id}>
                    {subject.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-end items-center mt-6">
            {error && <p className="mr-4">⚠️ Image Generation failed ⚠️</p>}
            {spinner && (
              <>
                <p className="mx-0">Generating Teacher </p>
                <div role="status" className="mr-5 ml-2">
                  <svg
                    aria-hidden="true"
                    class="inline w-5 h-5 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-second"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only text-white">Loading...</span>
                </div>
              </>
            )}

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
