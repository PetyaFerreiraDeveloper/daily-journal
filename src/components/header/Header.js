import React, { useState } from "react";
import logo from "../../assets/logoPan.jpeg";
import BurgerIcon from "../svg/BurgerIcon";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";


const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="bg-gray-800 w-full">

    <header className=" text-white min-h-[50px] py-3 px-5 3xl:w-9/12 3xl:m-auto max-w-screen-3xl z-10">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} width="50px" alt="logo" />
        </Link>
        <MainNavigation className="hidden lg:flex" />
        <button aria-label="Open the menu" className="cursor-pointer lg:hidden" onClick={() => setOpenMenu(!openMenu)}>
          <BurgerIcon
            svg={""}
            width={25}
            height={17}
            fill={"white"}
            aria-hidden={"true"}
          />
        </button>
        <div className="hidden lg:flex gap-x-4">
        <Link
            to={"/login"}
            className="rounded-full border-2 bg-blue-800 border-black xxs:px-5 px-8 py-2"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="rounded-full border-2 bg-yellow-500 border-black xxs:px-5 px-8 py-2"
          >
            Register
          </Link>
        </div>
      </div>
      <SideNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} />

    </header>
    </div>
  );
};

export default Header;
