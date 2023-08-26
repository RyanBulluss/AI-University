export default function SubmitButton({ buttonText }) {
  return (
    <button
      className="px-6 py-2 my-4 leading-5 text-white transition-colors duration-200 transform bg-first rounded-md hover:bg-second/50 focus:outline-none focus:bg-first/30"
      type="submit"
    >
      {buttonText}
    </button>
  );
}
