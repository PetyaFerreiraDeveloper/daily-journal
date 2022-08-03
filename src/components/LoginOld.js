import React, {useState} from "react";
import { Link } from "react-router-dom";

const LoginOld = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    const {

    } = Object.entries(new FormData)
  };

  const changeHandler = () => {

  }

  return (
    <section id="login-page" className="h-screen flex bg-gray-300">
      <form
        id="login"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
        onClick={submitHandler}
      >
        <h2 className="text-center">Login</h2>
        <div className="flex flex-col gap-y-5 ">
          {/* <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Sokka@gmail.com"
              className="border-2 justify-self-end"
              value={values.email}
              onChange={changeHandler}
            />
          </div> */}

          {/* <div className="flex gap-x-3 justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2"
              value={values.password}
              onChange={changeHandler}
            />
          </div> */}
          <div className="flex gap-x-3 justify-between">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          className="border-2"
          onChange={changeHandler}
          value={values.email}
        />
      </div>
      <div className="flex gap-x-3 justify-between">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          className="border-2"
          onChange={changeHandler}
          value={values.password}
        />
      </div>

          <input
            type="submit"
            className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer"
            value="Login"
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

export default LoginOld;
