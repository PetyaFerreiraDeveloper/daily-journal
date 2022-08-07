// TODO: show logout button next to user email

import React, { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";

import { privatePages , publicPages } from "../../constants/pages";
import CloseIcon from "../svg/CloseIcon";
import PageLink from '../common/PageLink';
import Button from '../common/Button';

const BurgerMenu = ({ className }) => {
  const { user } = useContext(AuthContext);
  let pages;
  if (user.email) {
    pages = privatePages;
  } else {
    pages = publicPages;
  }

  return (
    <div className={className}>
      <div className="flex justify-between gap-x-8 items-center border-b-[3px] border-gray-300 pr-8 pl-7 py-1 h-[72px] md:h-[91px]">
      {user.email
        ? <p>{user.email}</p>
        : <div className="flex justify-between gap-x-4">
          <Button nav={"/login"} label={'Login'} className={'bg-dark-green border-darker-green'}/>
          <Button nav={"/register"} label={'Register'} className={'bg-orange-400 border-orange-500'}/>
          </div>
        }

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
