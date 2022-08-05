import React from "react";
import { Link } from "react-router-dom";

const Button = (props) => {
  const { className, label, nav } = props;
  return (
    <Link
      to={nav}
      className={`rounded-full border-2 px-8 py-2 text-white ${className}`}
    >
      {label}
    </Link>
  );
};

export default Button;
