import React from "react";
import { NavLink } from "react-router-dom";

const PageLink = ({ link }) => {
  const { page, navigation } = link;

  return (
    <NavLink 
      to={navigation}
      className="p-3"
      style={(navLinkProps) => {
        return navLinkProps.isActive
         ? {
          backgroundColor: 'darkgreen',
          padding: '8px 20px',
          borderRadius: '9999px',

        }
         : null
      }}
    >
      {page}
    </NavLink>
  );
};

export default PageLink;
