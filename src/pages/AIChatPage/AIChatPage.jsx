import { useState, useEffect, useRef } from "react";
import { getOneTeacher } from "../../utilities/teacher-api";
import { useParams } from "react-router-dom";
import ChatTop from "../../components/ChatTop/ChatTop";
import ChatBottom from "../../components/ChatBottom/ChatBottom";
import chatTime from "../../utilities/chat-time";
import {
  sendQuestion,
  getMessages,
  sendAnswer,
} from "../../utilities/aiChat-api";

export default function AIChatPage({ user }) {
  const [teacher, setTeacher] = useState({ name: '' });
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [typing, setTyping] = useState(false);

  const teacherId = useParams();

  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever new messages are added
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, showForm, typing]);

  async function handleSubmit(e) {
    e.preventDefault();
    const message = newMessage;
    setNewMessage("");

    const chat = await sendQuestion({
      text: message,
      userId: user._id,
      teacherId: teacherId.id,
    });
    setMessages(chat.logs);
    setTimeout(() => setTyping(true), 750);

    const fullChat = await sendAnswer({
      user: user,
      teacher: teacher,
      message: message,
    });
    setMessages(fullChat.logs);
    setTyping(false);
  }

  useEffect(() => {
    async function getTeacher() {
      const currentTeacher = await getOneTeacher(teacherId.id);
      setTeacher(currentTeacher);
    }

    getTeacher();
  }, [teacherId]);

  useEffect(() => {
    async function getStudent() {
      const chat = await getMessages({
        student: user._id,
        teacher: teacherId.id,
      });
      if (!chat) return;
      setMessages(chat.logs);
    }

    getStudent();
  }, [user._id, teacherId.id]);

  return (
    <div className="h-[100vh] mx-auto max-w-4xl w-full flex flex-col">
      <ChatTop recipient={teacher} user={user} />
      <div
        className={`flex-grow mx-4 overflow-y-auto chat-scrollbar ${
          showForm ? "mt-28 mb-56" : "my-28"
        }`}
        ref={chatContainerRef}
      >
        {messages.map((message, idx) =>
          message.messageType === "user" ? (
            <div key={idx} className="flex items-center justify-end">
              <h4>{chatTime(message.message.createdAt)}</h4>
              <h3 className="bg-blue-400 w-3/5 rounded-l-2xl rounded-t-2xl p-3 m-4 text-lg md:text-xl lg:text-2xl">
                {message.message.text}
              </h3>
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img src={user.image} alt="profile" />
              </div>
            </div>
          ) : (
            <div key={idx} className="flex items-center justify-start">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img src={teacher.image} alt="profile" />
              </div>
              <h3 className="bg-second/60 w-3/5 rounded-r-2xl rounded-t-2xl p-3 m-4 text-lg md:text-xl lg:text-2xl">
                {message.message.text} <br />
              </h3>
              <h4>{chatTime(message.message.createdAt)}</h4>
            </div>
          )
        )}
        {typing && <div>
          <div className="flex items-center justify-start">
              <div className="h-14 w-14 overflow-hidden rounded-full">
                <img src={teacher.image} alt="profile" />
              </div>
              <div className="ml-4 my-3 bg-first px-10 py-5 rounded-2xl">
              <div class="dot-elastic"></div>

              </div>
            </div>
        </div>}
      </div>
      <ChatBottom
        setShowForm={setShowForm}
        showForm={showForm}
        teacher={teacher}
        user={user}
        newMessage={newMessage}
        setNewMessage={setNewMessage}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
