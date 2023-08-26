import { Link } from "react-router-dom";
import { FaRobot , FaUserGraduate, FaBook, FaPlus, FaCog } from "react-icons/fa";

export default function SideBar() {
  const routes = [
    {
      name: "Teachers",
      icon: <FaRobot  className="text-3xl" />,
      link: "/",
    },
    {
      name: "Students",
      icon: <FaUserGraduate className="text-3xl" />,
      link: "/students",
    },
    {
      name: "Notes",
      icon: <FaBook className="text-3xl" />,
      link: "/notebook",
    },
    {
      name: "Create",
      icon: <FaPlus className="text-3xl" />,
      link: "/teacher/create",
    },
    {
      name: "Settings",
      icon: <FaCog className="text-3xl" />,
      link: "/settings",
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
