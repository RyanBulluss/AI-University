import { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { updateLevel } from "../../utilities/users-api";

export default function LearningLevel({ user, setUser }) {
  const [level, setLevel] = useState(user.level);
  const [success, setSuccess] = useState(false);

  const levels = [
    "University",
    "High School",
    "Elementary School",
    "Pre School",
  ];

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ level });
    const newUser = await updateLevel({ level });
    setUser(newUser);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label className="text-white">Education Level</label>
      <select
        className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
        name="level"
        onChange={(e) => setLevel(e.target.value)}
      >
        {levels.map((l, idx) => (
          <option key={idx} defaultValue={l} selected={l === user.level}>
            {l}
          </option>
        ))}
      </select>
      <div className="flex justify-between">
        <div>
          {success && (
            <h4 className="px-2 py-2 my-2 text-second">
              Education Level Saved ✔️
            </h4>
          )}
        </div>
        <SubmitButton buttonText={"Submit"} />
      </div>
    </form>
  );
}
