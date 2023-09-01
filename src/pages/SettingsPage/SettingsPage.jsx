import LearningLevel from "../../components/LearningLevel/LearningLevel";
import ProfilePic from "../../components/ProfilePic/ProfilePic";
import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

export default function SettingsPage({ setUser, user }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex items-center justify-between">

      <h1 className="text-4xl my-10 font-bold">Settings Page</h1>
      <Link
        className="bg-red-600 hover:bg-red-800 mt-1 py-1 px-2 rounded-xl"
        to=""
        onClick={handleLogOut}
      >
        Log Out
      </Link>
      </div>
      <ProfilePic setUser={setUser} />
      <LearningLevel user={user} setUser={setUser} />
    </div>
  );
}
