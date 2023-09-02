import { Link } from "react-router-dom";
import {
  FaRobot,
  FaCrown,
  FaUserGraduate,
  FaBook,
  FaPlus,
  FaCog,
} from "react-icons/fa";
import { useState } from "react";

export default function SideBar({ user }) {
  const [routes, setRoutes] = useState([
    {
      name: "Teachers",
      icon: <FaRobot className="text-3xl" />,
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
  ]);

  return (
    <div className="space-y-4 flex flex-col h-full bg-third">
      <div className="p-1 flex-1 justify-center">
        <div className="space-y-2">
          {user && !user.premium && (
            <Link
              className="text-xs text-gray-300 hover:text-white group flex py-3 
          w-full justify-start font-medium cursor-poiner 
          hover:bg-fifth/30 rounded-lg transition"
              to="/stripe"
            >
              <div
                className="flex flex-col text-base gap-y-2 items-center flex-1"
                style={{ userSelect: "none" }}
              >
                <FaCrown className="text-3xl" />
                Premium
              </div>
            </Link>
          )}

          {routes.map((route, idx) => (
            <Link
              className="text-xs text-gray-300 hover:text-white group flex py-3 
          w-full justify-start font-medium cursor-poiner 
          hover:bg-fifth/30 rounded-lg transition"
              to={route.link}
              key={idx}
            >
              <div
                key={idx}
                className="flex flex-col text-base gap-y-2 items-center flex-1"
                style={{ userSelect: "none" }}
              >
                {route.icon}
                {route.name}
              </div>
            </Link>
          ))}
          {user && user.premium && (
            <Link
              className="text-xs text-gray-300 hover:text-white group flex py-3 
          w-full justify-start font-medium cursor-poiner 
          hover:bg-fifth/30 rounded-lg transition"
              to="/teacher/create"
            >
              <div
                className="flex flex-col text-base gap-y-2 items-center flex-1"
                style={{ userSelect: "none" }}
              >
                <FaPlus className="text-3xl" />
                Create
              </div>
            </Link>
          )}

          <Link
            className="text-xs text-gray-300 hover:text-white group flex py-3 
          w-full justify-start font-medium cursor-poiner 
          hover:bg-fifth/30 rounded-lg transition"
            to="/settings"
          >
            <div
              className="flex flex-col text-base gap-y-2 items-center flex-1"
              style={{ userSelect: "none" }}
            >
              <FaCog className="text-3xl" />
              Settings
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
