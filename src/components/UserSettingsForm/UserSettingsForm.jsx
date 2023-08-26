import { useState } from "react";
import SubmitButton from "../SubmitButton/SubmitButton";
import { updateUserImage } from "../../utilities/users-api";

export default function UserSettingsForm( {setUser} ) {
  const [imageUrl, setImageUrl] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		const user = await updateUserImage({imageUrl});
		setUser(user);
	}

  return (
    <form className="" onSubmit={handleSubmit}>
      <div>
        <label className="text-white dark:text-gray-200">
          Change Profile Picture
        </label>
        <input
					value={imageUrl}
					onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
        />
        <SubmitButton buttonText={"Submit"} />
      </div>
    </form>
  );
}
