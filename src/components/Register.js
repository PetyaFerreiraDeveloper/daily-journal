import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import {AuthContext} from '../contexts/AuthContext';

import * as authService from '../services/authService';

const Register = () => {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPass = formData.get('confirmPass');

    authService.register(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate('/');
      })
  };
  
  return (
    <section id="register-page" className=" bg-gray-300 h-screen flex">
      <form
        id="register"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
        onSubmit={submitHandler}
      >
        <div className="flex flex-col gap-y-5 ">
          <h2 className="text-center">Register</h2>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="maria@email.com"
              className="border-2"
            />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="password">Password:</label>
            <input className="border-2" type="password" name="password" id="password" />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="confirmPass">Confirm Password:</label>
            <input
              type="password"
              name="confirmPass"
              id="confirmPass"
              className="border-2"
            />
          </div>
          <input className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer" type="submit" defaultValue="Register" />
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
