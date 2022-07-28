import React from "react";
import { Link } from "react-router-dom";

const PageLink = ({ link }) => {
  const { page, navigation } = link;

  return (
    <Link to={navigation}>{page}</Link>
  );
};

export default PageLink;
