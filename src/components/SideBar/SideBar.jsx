import { Link } from "react-router-dom";
import { FaHome, FaBook, FaPlus, FaCog } from "react-icons/fa";

export default function SideBar() {
  const routes = [
    {
      name: "Home",
      icon: <FaHome className="text-3xl" />,
      link: "/",
    },
    {
      name: "Notes",
      icon: <FaBook className="text-3xl" />,
      link: "/notebook",
    },
    {
      name: "Create",
      icon: <FaPlus className="text-3xl" />,
      link: "/",
    },
    {
      name: "Settings",
      icon: <FaCog className="text-3xl" />,
      link: "/",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col h-full bg-third">
      <div className="p-1 flex-1 justify-center">
        <div className="space-y-2">
          {routes.map((route, idx) => (
            <Link
              className="text-muted-foreground text-xs group flex py-3 
          w-full justify-start font-medium cursor-poiner 
          hover:bg-fifth/30 rounded-lg transition"
              to={route.link}
              key={idx}
            >
              <div
                key={idx}
                className="flex flex-col text-base gap-y-2 items-center flex-1"
              >
                {route.icon}
                {route.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
