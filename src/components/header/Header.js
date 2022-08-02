import React, { useState } from "react";
import {ReactComponent as LogoWhite} from "../../assets/logoWhite.svg";
import BurgerIcon from "../svg/BurgerIcon";
import MainNavigation from "./MainNavigation";
import { Link } from "react-router-dom";
import SideNavigation from "./SideNavigation";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="py-2 px-8 3xl:w-9/12 3xl:m-auto max-w-screen-3xl z-10 text-white">
      <div className="flex justify-between items-center">
        <Link to="/" className="flex">
          <LogoWhite alt="logo" className="w-[60px] md:w-[100px]"  />
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
            className="rounded-full bg-blue-800 border-black px-5 py-2"
          >
            Login
          </Link>
          <Link
            to={"/register"}
            className="rounded-full border-2 border-orange-500 bg-orange-400 px-5 py-2"
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
