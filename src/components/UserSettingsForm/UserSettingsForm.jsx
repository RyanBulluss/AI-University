export default function UserSettingsForm() {
  return (
    <div>
      <form>
        <div>
          <label className="text-white dark:text-gray-200">Change Profile Picture</label>
          <input
            type="text"
            className="w-full px-4 py-2 mt-2 border border-fifth rounded-md bg-fourth focus:border-white focus:ring"
          />
            
        </div>
      </form>
    </div>
  );
}
