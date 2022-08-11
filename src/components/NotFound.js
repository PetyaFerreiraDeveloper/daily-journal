import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const backClickHandler = () => {
    navigate(-1);
  };
  return (
    <div className=" flex flex-col gap-y-10">
      <section
        className={`-mt-[80px] md:-mt-[116px] h-20 md:h-[130px] -mx-[32px] lg:-mx-[96px] 2xl:-mx-[128px] px-8 md:px-16 2xl:px-32 justify-center items-center xs:pb-10 pb-20 relative bg-heroGreen`}
      ></section>
      <section className="flex flex-col gap-y-10 justify-center items-center">
        <h1>404 Page not found</h1>
        <button
          className="rounded-full border-2 border-orange-500 bg-orange-400 px-8 py-2"
          onClick={backClickHandler}
        >
          Back
        </button>
      </section>
    </div>
  );
};

export default NotFound;
