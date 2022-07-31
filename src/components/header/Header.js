import React, { useState } from "react";
import logo from "../../assets/logoPan.jpeg";
import logoSvg from "../../assets/logo.svg";
import logo1 from "../../assets/logo1.svg";
import BurgerIcon from "../svg/BurgerIcon";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="py-3 px-8 3xl:w-9/12 3xl:m-auto max-w-screen-3xl z-10 text-white">
      <div className="flex justify-between items-center">
        <Link to="/">
          {/* <img src={logo} alt="logo" className="w-[50px] md:w-[80px]" /> */}
          <img src={logo1} alt="logo" className="w-[50px] md:w-[50px]" />
          {/* <img src={logoSvg} alt="logosvg" className="w-[50px] md:w-[80px]" /> */}
        </Link>
        <div>
        </div>
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
            className="rounded-full border-2 border-orange-500 bg-orange-400 xxs:px-5 px-8 py-2"
          >
            Register
          </Link>
        </div>
      </div>
      <SideNavigation openMenu={openMenu} setOpenMenu={setOpenMenu} />

    </header>
  );
};

export default Header;
