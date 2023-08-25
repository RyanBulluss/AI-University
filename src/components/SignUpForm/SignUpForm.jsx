import { Component } from "react";
import { signUp } from "../../utilities/users-service";

export default class SignUpForm extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirm: "",
    error: "",
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: "",
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const { name, email, password } = this.state;
      const formData = { name, email, password };
      console.log(formData);
      const user = await signUp(formData);
      this.props.setUser(user);
    } catch {
      this.setState({ error: "Sign Up Failed - Try Again" });
    }
  };

  render() {
    const disable = this.state.password !== this.state.confirm;
    return (
      <>
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">
          AI University{" "}
        </h1>
        <h2 className="text-3xl md:text-5xl font-bold text-center m-4">
          Sign Up
        </h2>
        <div className="">
          <form
            autoComplete="off"
            onSubmit={this.handleSubmit}
            className="flex flex-col gap-2 m-8 text-xl md:text-2xl"
          >
            <label>Name</label>
            <input
              className="rounded-lg px-1 bg-fourth"
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required
            />
            <label>Email</label>
            <input
              className="rounded-lg px-1 bg-fourth"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
            <label>Password</label>
            <input
              className="rounded-lg px-1 bg-fourth"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
            <label>Confirm</label>
            <input
              className="rounded-lg px-1 bg-fourth"
              type="password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
              required
            />
            <p className="error-message">&nbsp;{this.state.error}</p>
            <button
              className="bg-first w-64 p-1 mx-auto rounded-lg"
              type="submit"
              disabled={disable}
            >
              SIGN UP
            </button>
          </form>
        </div>
      </>
    );
  }
}
