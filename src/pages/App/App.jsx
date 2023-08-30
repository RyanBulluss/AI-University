import { useState } from "react";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import TeacherIndexPage from "../TeacherIndexPage/TeaherIndexPage";
import NotebookPage from "../NotebookPage/NotebookPage";
import CreateTeacherPage from "../CreateTeacherPage/CreateTeacherPage";
import NavBar from "../../components/NavBar/NavBar";
import Sidebar from "../../components/SideBar/SideBar";
import { useLocation } from "react-router-dom";

import { Routes, Route } from "react-router-dom";
import SettingsPage from "../SettingsPage/SettingsPage";
import StudentIndexPage from "../StudentIndexPage/StudentIndexPage";
import AIChatPage from "../AIChatPage/AIChatPage";
import StudentChatPage from "../StudentChatPage/StudentChatPage";

export default function App() {
  const [user, setUser] = useState(getUser());
  const location = useLocation();



  

  const showNav = !location.pathname.includes(`/chat/`);
  return (
    <main>
      {user ? (
        <>
          {showNav && (
            <>
              <NavBar user={user} setUser={setUser} />
              <div className="hidden md:flex mt-16 w-20 flex-col fixed inset-y-0">
                <Sidebar />
              </div>
            </>
          )}
          <div>
            <Routes>
              <Route path="/" element={<div className="ml-4 md:ml-28 mt-24 mb-8 mr-4 md:mr-8"><TeacherIndexPage /></div>} />
              <Route path="/students" element={<div className="ml-4 md:ml-28 mt-24 mb-8 mr-4 md:mr-8"><StudentIndexPage user={user} /></div>} />
              <Route path="/notebook" element={<div className="ml-4 md:ml-28 mt-24 mb-8 mr-4 md:mr-8"><NotebookPage user={user} /></div>} />
              <Route path="/teacher/create" element={<div className="ml-4 md:ml-28 mt-24 mb-8 mr-4 md:mr-8"><CreateTeacherPage /></div>} />
              <Route path="/settings" element={<div className="ml-4 md:ml-28 mt-24 mb-8 mr-4 md:mr-8"><SettingsPage user={user} setUser={setUser} /> </div>} />
              <Route path="/teacher/chat/:id" element={<AIChatPage user={user} />} />
              <Route path="/student/chat/:id" element={<StudentChatPage user={user} />} />
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
