import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full bg-gray-800">
      <footer className="py-3 px-5 text-white min-h-[50px] ">
        <div className="flex justify-center align-center gap-x-1">
          <p className="">&copy; Copyright Petya Naydenova Ferreira</p>
          <span>{currentYear}</span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
