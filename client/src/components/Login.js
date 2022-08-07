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
    <section className="h-screen flex flex-col">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center border-2 rounded-2xl m-auto gap-y-6 p-6 bg-white"
      >
        <div className="flex flex-col gap-y-5 ">
          <h2 className="text-center">Login</h2>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              name="email"
              className="border-2 outline-hidden focus:outline-none"
              onChange={onChange}
              value={values.email}
            />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              className="border-2 outline-hidden focus:outline-none "
              onChange={onChange}
              value={values.password}
            />
          </div>

          <input
            className={`border-2 bg-dark-green border-darker-green text-white rounded-full px-8 py-2 place-self-center cursor-pointer`}
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
