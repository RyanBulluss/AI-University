import chatTime from "../../utilities/chat-time";
import { useRef, useEffect } from "react";

export default function ChatBody({ messages, user, recipient, showForm }) {
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom whenever new messages are added
    chatContainerRef.current.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, showForm]);

  return (
    <div
      className={`flex-grow mx-4 overflow-y-auto chat-scrollbar ${
        showForm ? "mt-28 mb-56" : "my-28"
      } `}
      ref={chatContainerRef}
    >
      {messages.map((message, idx) =>
        message.sender === user._id ? (
          <div key={idx} className="flex items-center justify-end">
            <h4>{chatTime(message.createdAt)}</h4>
            <h3 className="bg-blue-400 w-3/5 rounded-l-2xl rounded-t-2xl p-3 my-4 mx-2 md:mx-4 text-lg md:text-xl lg:text-2xl">
              {message.text}
            </h3>
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <img src={user.image} alt="profile" />
            </div>
          </div>
        ) : (
          <div key={idx} className="flex items-center justify-start">
            <div className="h-14 w-14 overflow-hidden rounded-full">
              <img src={recipient.image} alt="profile" />
            </div>
            <h3 className="bg-second/60 w-3/5 rounded-r-2xl rounded-t-2xl p-3 my-4 mx-2 md:mx-4 text-lg md:text-xl lg:text-2xl">
              {message.text}
            </h3>
            <h4>{chatTime(message.createdAt)}</h4>
          </div>
        )
      )}
    </div>
  );
}
