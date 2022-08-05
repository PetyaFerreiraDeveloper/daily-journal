import React from "react";
import { NavLink } from "react-router-dom";

const PageLink = ({ link }) => {
  const { page, navigation } = link;

  return (
    <NavLink 
      to={navigation}
      className="rounded-full border-2 border-transparent"
      style={(navLinkProps) => {
        return navLinkProps.isActive
         ? {
          backgroundColor: '#006400',
          padding: '11px 32px',
          borderRadius: '9999px',
          borderColor: '#005000'
        }
         : null
      }}
    >
      {page}
    </NavLink>
  );
};

export default PageLink;
