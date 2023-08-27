import { Link } from "react-router-dom";
import { FiChevronLeft, FiMoreVertical, FiSend  } from "react-icons/fi";

export default function ChatTop( {recipient, user} ) {
  return (
    <div className="h-28 flex items-center mx-4 border-b border-fourth shadow-md">
      <Link className="text-4xl m-4" to={recipient.description ? '/' : '/students'}>
        <FiChevronLeft />
      </Link>
      <div className="flex-grow flex mx-4">
        <div className="w-20 h-20 overflow-hidden rounded-3xl">
          <img src={recipient.image} alt="" />
        </div>
        <div className="flex flex-col justify-center mx-4">
          <h3 className="text-lg font-semibold">{recipient.name}</h3>
          <h4 className="text-sm text-gray-400">{recipient.seed ? '' : user._id === recipient._id ? 'Yourself' : 'Student'}</h4>
          <h4 className="text-sm text-gray-400">{recipient.description}</h4>
        </div>
      </div>
      <div className="text-3xl m-4">
        <FiMoreVertical />
      </div>
    </div>
  );
}
