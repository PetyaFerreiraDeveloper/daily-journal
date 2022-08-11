import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {AuthContext} from '../contexts/AuthContext';

import * as authService from '../services/authService';

const Register = () => {
  const [error, setError] = useState(false);
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPass = formData.get('confirmPass');

    if (password !== confirmPass) {
      setError(true);
      return;
    }

    authService.register(email, password)
      .then((authData) => {
        setError(false);
        userLogin(authData);
        navigate('/');
      })
  };
  
  return (
    <section className="flex flex-col gap-y-10">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>

      <form
        className="flex flex-col justify-center border-2 rounded-2xl m-auto gap-y-6 p-6 bg-white"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-y-5 ">
          <h1 className="text-center">Register</h1>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
              className="border-2 outline-hidden focus:outline-none"
            />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="password">Password:</label>
            <input className="border-2 outline-hidden focus:outline-none" type="password" name="password" id="password" />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="confirmPass">Confirm Password:</label>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              className="border-2 outline-hidden focus:outline-none"
            />
          </div>
          {error
            ? <p className="text-red-400">Passwords don't match</p>
            : null
          }
          <input className="border-2 bg-dark-green border-darker-green text-white rounded-full px-8 py-2 place-self-center cursor-pointer" type="submit" value="Register" />
          <p className="self-end">
            <span>
              If you already have profile{" "}
              <Link to="/login" className="cursor-pointer text-blue-600">
                click here
              </Link>
            </span>
          </p>
        </div>
      </form>
    </section>
  );
};

export default Register;
