import React from "react";
import LoginBgImage from "../../assets/images/login-bg.png";

const BaseContent = ({ children }) => {
  return (
    <div className="relative h-screen overflow-hidden flex flex-col bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 sm:bg-transparent">
      {/* Background image for screens sm and larger */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover hidden sm:block"
        src={LoginBgImage}
        alt="Login Background"
      />

      <div className="flex flex-grow items-center justify-center relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg xl:ml-[25px] mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default BaseContent;
