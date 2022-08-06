import React, { useRef } from 'react';

import BurgerMenu from './BurgerMenu';
import {ClickOutside} from '../../utils/ClickOutside';

const SideNavigation = ({ openMenu, setOpenMenu }) => {
  const node = useRef();
  ClickOutside(node, () => setOpenMenu(false));

  const showMenu =
    'fixed right-0 top-0 h-screen overflow-y-auto bg-white transition ease-in-out delay-150 rounded-tl-3xl rounded-bl-3xl -mx-1 text-gray-800 pb-10';

  return (
    <nav  
      className="2xl:hidden" 
      onClick={() => setOpenMenu(!openMenu)}  
      ref={node}
    >
      {!openMenu ? (
          <BurgerMenu  className={`${showMenu} translate-x-full`} />
      ) : (
        <BurgerMenu className={`${showMenu} translate-x-0 `}  />
      )}
    </nav>
  );
};

export default SideNavigation;
