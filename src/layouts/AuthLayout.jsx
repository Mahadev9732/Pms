import React from "react";

const AuthLayout = ({ children }) => {
  return (
    <>
      <div className="absolute z-10 top-0 left-0 w-full bg-green-950 text-white text-base md:text-lg lg:text-xl xl:text-2xl h-16 flex items-center justify-center px-4">
        Federal Ministry of Education Employee Performance Management System
      </div>
      <main>{children}</main>
      <div className="absolute z-10 bottom-0 left-0 w-full bg-green-950 text-white text-xs md:text-sm lg:text-base xl:text-lg h-16 flex items-center justify-center px-4">
        Welcome to Federal Ministry of Education Employee Performance Management
        Automated Database
      </div>
    </>
  );
};

export default AuthLayout;
