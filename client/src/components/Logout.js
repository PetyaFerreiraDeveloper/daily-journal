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
    <div className="h-screen flex flex-col">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>
      <div className="flex flex-col border-2 m-auto gap-y-10 px-6 py-20 bg-white w-[320px] rounded-2xl">
        <h1 className="text-base">Are you sure you want to logout?</h1>
        <div className="flex gap-x-3 justify-end">
          <button
            className="rounded-full border-2 bg-orange-500 border-orange-600 px-8 py-2 text-white"
            onClick={handleYesClick}
          >
            Yes
          </button>
          <button
            className="rounded-full border-2 text-white bg-dark-green border-darker-green px-8 py-2 "
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
