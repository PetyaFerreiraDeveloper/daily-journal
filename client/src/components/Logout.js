import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";
import * as authService from "../services/authService";

const Logout = () => {
  const navigate = useNavigate();
  const { user, userLogout } = useContext(AuthContext);
 
  const handleNoClick = () => {
    navigate(-1);
  };

  const handleYesClick = () => {
    authService.logout(user.accessToken).then(() => {
      userLogout();
    });
    navigate("/");
  };

  return (
    <div className="h-screen flex bg-gray-300">
      <div className="flex flex-col justify-center border-2 m-auto gap-y-3 p-6 bg-white">
        <p>Are you sure you want to logout?</p>
        <div className="flex gap-x-3 justify-end">
          <button
            className="border-2 border-gray-300 px-3 py-1 rounded-lg bg-red-200 cursor-pointer"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="border-2 border-gray-300 px-3 py-1 rounded-lg bg-green-200 cursor-pointer"
            onClick={handleNoClick}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logout;
