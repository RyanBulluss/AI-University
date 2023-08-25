import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import TeacherIndexPage from "../TeacherIndexPage/TeaherIndexPage";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import NotebookPage from "../NotebookPage/NotebookPage";

import { Routes, Route } from "react-router-dom";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="hidden md:flex mt-16 w-20  flex-col fixed inset-y-0">
            <Sidebar />
          </div>
          <div className="ml-4 md:ml-24 mt-20 mb-4 mr-4">
            <Routes>
              <Route path="/" element={<TeacherIndexPage />} />
              <Route path="/notebook" element={<NotebookPage />} />
            </Routes>
          </div>
        </>
      ) : (
        <div className="h-[100vh] flex items-center justify-center">
          <AuthPage setUser={setUser} />
        </div>
      )}
    </main>
  );
}
