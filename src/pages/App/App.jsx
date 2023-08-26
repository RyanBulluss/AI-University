import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import TeacherIndexPage from "../TeacherIndexPage/TeaherIndexPage";
import NotebookPage from "../NotebookPage/NotebookPage";
import CreateTeacherPage from "../CreateTeacherPage/CreateTeacherPage";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";

import { Routes, Route } from "react-router-dom";
import SettingsPage from "../SettingsPage/SettingsPage";
import StudentIndexPage from "../StudentIndexPage/StudentIndexPage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <div className="hidden md:flex mt-16 w-20  flex-col fixed inset-y-0">
            <Sidebar />
          </div>
          <div className="ml-8 md:ml-28 mt-24 mb-8 mr-8">
            <Routes>
              <Route path="/" element={<TeacherIndexPage />} />
              <Route path="/students" element={<StudentIndexPage />} />
              <Route path="/notebook" element={<NotebookPage />} />
              <Route path="/teacher/create" element={<CreateTeacherPage />} />
              <Route path="/settings" element={<SettingsPage setUser={setUser} />} />
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
