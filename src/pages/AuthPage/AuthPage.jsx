import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import { useState } from "react";
import { demoAccount } from "../../utilities/users-service";

export default function AuthPage({ setUser }) {
  const [login, setLogin] = useState(true);

  async function handleDemo() {
    const user = await demoAccount();
    setUser(user)
  }

  return (
    <main className="flex flex-col items-center justify-center">
      {login ? (
        <LoginForm setUser={setUser} />
      ) : (
        <SignUpForm setUser={setUser} />
      )}
      <p className="flex justify-between gap-4 p-1">
        <button
          className=" text-second mx-auto rounded-lg"
          onClick={() => setLogin(!login)}
        >
          {login ? "Sign Up" : "Log in"}
        </button>
        or
        <button
          className=" text-second mx-auto rounded-lg"
          onClick={handleDemo}
        >
          Demo Account
        </button>
      </p>
    </main>
  );
}
