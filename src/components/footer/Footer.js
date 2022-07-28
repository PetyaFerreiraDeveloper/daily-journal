import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-3 px-5 text-white bg-gray-800 min-h-[50px]">
      <div className="flex justify-center align-center gap-x-1">
        <p className="">&copy; Copyright Petya Naydenova Ferreira</p>
        <span>{currentYear}</span>
      </div>
    </footer>
  );
};

export default Footer;
