import React from 'react';
import { pages } from '../../constants/pages';
import PageLink from '../PageLink';

const MainNavigation = () => {
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
