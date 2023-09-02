import { useState, useEffect } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { userImage } from "../../utilities/users-service";

export default function ProfilePic({ setUser }) {
  const [imageUrl, setImageUrl] = useState("");
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log({ imageUrl });
    const user = await userImage({ imageUrl });
    setUser(user);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  }

  return (
    <form className="" onSubmit={handleSubmit}>
      <div>
        <label className="text-white">Change Profile Picture</label>
        <input
          placeholder="Image url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
        />
        <div className="flex justify-between">
          <div>
            {success && (
              <h4 className="px-2 py-2 my-2 text-second">Image Saved ✔️</h4>
            )}
          </div>
          <SubmitButton buttonText={"Submit"} />
        </div>
      </div>
    </form>
  );
}
