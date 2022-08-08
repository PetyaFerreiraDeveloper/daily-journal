import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const backClickHandler = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col gap-y-10 justify-center items-center">
      <h1>404 Page not found</h1>
      <button
        className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
        onClick={backClickHandler}
      >
        Back
      </button>
    </div>
  );
};

export default NotFound;
