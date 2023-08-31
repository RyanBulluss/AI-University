import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";
import MobileSideBar from "../MobileSideBar/MobileSideBar";

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav
      className="w-full z-50 flex justify-between items-center px-2 border-b
      border-fifth/10 bg-third h-16 fixed inset-y-0"
      style={{ userSelect: 'none' }}
    >
      <div className="flex items-center">
        <MobileSideBar />
        <Link
          className="hidden hover:bg-fifth/30 md:block text-3xl font-bold py-2 px-4 rounded-xl"
          to="/"
        >
          AI University
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Link
          className="hover:bg-fifth/30 py-2 px-4 rounded-xl"
          to=""
          onClick={handleLogOut}
        >
          Log Out
        </Link>
        <div className="h-10 w-10 overflow-hidden rounded-full">
          <img src={user.image} alt="profile" />
        </div>
      </div>
    </nav>
  );
}
