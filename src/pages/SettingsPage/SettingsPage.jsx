import LearningLevel from "../../components/LearningLevel/LearningLevel";
import ProfilePic from "../../components/ProfilePic/ProfilePic";

export default function SettingsPage({ setUser, user }) {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl my-10 font-bold">Settings Page</h1>
      <ProfilePic setUser={setUser} />
      <LearningLevel user={user} setUser={setUser} />
    </div>
  );
}
