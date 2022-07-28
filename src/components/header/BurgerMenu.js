import React from "react";
import { Link } from "react-router-dom";

import { pages } from "../../constants/pages";
import CloseIcon from "../svg/CloseIcon";
import PageLink from "../PageLink";

const BurgerMenu = ({ className }) => {
  return (
    <div className={className}>
      <div className="flex justify-between gap-x-8 items-center border-b-[3px] border-gray-300 pr-8 pl-7 py-1 h-[72px] md:h-[91px]">
        <div className="flex justify-between gap-x-4">
          <Link
            to={"/login"}
            className="rounded-full border-2 bg-blue-500 border-black xxs:px-5 px-8 py-2"
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
        <CloseIcon
          width={20}
          height={20}
          fill={"black"}
          className="cursor-pointer"
        />
      </div>
      <nav className="flex flex-col space-y-4 border-b-[3px] px-7 pt-6 pb-9">
        <ul className="flex flex-col gap-y-5 m-0 p-0 list-none">
          {pages.map((link, index) => (
            <li key={index}>
              <PageLink link={link} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;
