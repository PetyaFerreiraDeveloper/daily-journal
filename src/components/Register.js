import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };
  
  return (
    <section id="register-page" className=" bg-gray-300 h-screen flex">
      <form
        id="register"
        className="flex flex-col justify-center border-2 m-auto gap-y-6 p-6 bg-white"
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
            <label htmlFor="pass">Password:</label>
            <input className="border-2" type="password" name="password" id="register-password" />
          </div>
          <div className="flex gap-x-3 justify-between">
            <label htmlFor="con-pass">Confirm Password:</label>
            <input
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="border-2"
            />
          </div>
          <input className="border-2 border-gray-300 rounded-lg px-3 py-1 place-self-center cursor-pointer" type="submit" defaultValue="Register" onClick={submitHandler}/>
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
