import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as authService from "../services/authService";

import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { userLogin } = useContext(AuthContext)
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(null)

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await authService.login(values);
    if (res.code === 403) {
      setError(res.message)
    } else {
      setError(null)
      // console.log(res);
      userLogin(res);
      navigate('/my-journal');
    }
  };

  const onChange = (e) => {
    setValues((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="login-page" className="h-screen flex bg-gray-300">
      <form
        onSubmit={submitHandler}
        id="login"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
      >
        <div className="flex flex-col gap-y-5 ">
          <h2 className="text-center">Login</h2>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              className="border-2"
              onChange={onChange}
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
              onChange={onChange}
              value={values.password}
            />
          </div>

          <input
            className={`border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center `}
            type="submit"
            value="Login"
          />
          {error && 
          <p className="text-red-400">{error}</p>
          }
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
