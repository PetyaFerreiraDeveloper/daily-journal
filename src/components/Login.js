import React from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section id="login-page" className="h-screen flex bg-gray-300">
      <form
        id="login"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
      >
        <h2 className="text-center">Login</h2>
        <div className="flex flex-col gap-y-5 ">
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
              className="border-2 justify-self-end"
            />
          </div>

          <div className="flex gap-x-3 justify-between">
            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              className="border-2"
            />
          </div>

          <input
            type="submit"
            className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer"
            defaultValue="Login"
            onClick={submitHandler}
          />

          <p className="self-end">
            <span>
              If you don't have a profile yet{" "}
              <Link to="/register" className="cursor-pointer text-blue-600">
                click here
              </Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Login;
