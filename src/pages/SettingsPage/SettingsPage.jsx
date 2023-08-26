import UserSettingsForm from "../../components/UserSettingsForm/UserSettingsForm";

export default function SettingsPage( {setUser} ) {
    return (
      <div className="">
        <h1 className="text-4xl my-10 font-bold">Settings Page</h1>
        <UserSettingsForm setUser={setUser} />
      </div>
    );
}
  