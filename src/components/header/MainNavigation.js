import React, { useContext } from 'react';

import { AuthContext } from '../../contexts/AuthContext';

import { publicPages, privatePages } from '../../constants/pages';
import PageLink from '../common/PageLink';

const MainNavigation = () => {
  const { user } = useContext(AuthContext);
  let pages;
  if (user.email) {
    pages = privatePages;
  } else {
    pages = publicPages;
  }

  return (
    <nav>
      <ul className={`hidden lg:flex gap-x-8 list-none m-0`}>
        {pages.map((link, index) => (
          <li key={index}>
            <PageLink link={link} />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MainNavigation;
