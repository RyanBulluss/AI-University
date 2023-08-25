import { useState } from "react";
import * as usersService from "../../utilities/users-service";

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError("");
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <>
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
        AI University{" "}
      </h1>
      <h2 className="text-3xl md:text-5xl font-bold text-center m-4">Log In</h2>
      <div>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 m-8 text-xl md:text-2xl"
        >
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
            className="rounded-lg px-1 bg-fourth"
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
            className="rounded-lg px-1 bg-fourth"
          />
          <p className="error-message">&nbsp;{error}</p>
          <button
            className="bg-first w-64 mx-auto p-1 rounded-lg"
            type="submit"
          >
            LOG IN
          </button>
        </form>
      </div>
    </>
  );
}
