import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";

export default function AuthPage({ setUser }) {
  const [login, setLogin] = useState(true);

  return (
    <main className="flex flex-col items-center justify-center">
      {login ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <button
        className="bg-first/60 w-64 p-1 mx-auto rounded-lg"
        onClick={() => setLogin(!login)}
      >
        {login ? "Sign Up" : "Log in"}
      </button>
    </main>
  );
}
