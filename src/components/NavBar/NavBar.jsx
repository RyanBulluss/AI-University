import { Link } from "react-router-dom";
import MobileSideBar from "../MobileSideBar/MobileSideBar";

export default function NavBar({ user, setUser }) {


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
      <div className="flex items-center mx-3">
        <Link to={'/settings'} className="h-10 w-10 overflow-hidden rounded-full">
          <img src={user.image} alt="profile" />
        </Link>
      </div>
    </nav>
  );
}
