import React from "react";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";



const Layout = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen relative bg-gray-400" >
      <Header />
      <main className=" grow px-8 lg:px-24 2xl:px-32 text-gray-800 3xl:w-9/12 3xl:m-auto max-w-screen-3xl">   {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
