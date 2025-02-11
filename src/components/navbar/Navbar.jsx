import React, { useState } from "react";
import { ChevronDown, UserPen, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { getUserDetails, getRole } from "../../_helper/authentication";
import { axiosPrivate } from "../../api/config";

const Navbar = ({ handleDrawerOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const userDetails = getUserDetails();
  const role = getRole();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleLogout = async () => {
    try {
      await axiosPrivate.post("api/logout");
      localStorage.clear();
      navigate("/");
    } catch (error) {
      if (
        error.response &&
        error.response.data.error === "The token has been blacklisted"
      ) {
        console.log("Token has been blacklisted, logging out immediately.");
        localStorage.clear();
        navigate("/");
      } else {
        console.error("Error logging out:", error);
      }
    }
  };

  return (
    <header className="h-16 w-full px-4 sm:px-8 bg-white fixed z-[100] shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-4 sm:gap-16">
        <img alt="logo" src={Logo} className="h-8 sm:h-12 w-auto" />
      </div>
      <div className="flex items-center gap-3.5 relative cursor-pointer">
        <div className="h-8 sm:h-10 w-8 sm:w-10 bg-[#626262] rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={
              userDetails?.avatar ||
              "https://media.geeksforgeeks.org/wp-content/uploads/20221210180014/profile-removebg-preview.png"
            }
            className="h-[34px] sm:h-[42px]"
            alt="Profile"
          />
        </div>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="dropbtn p-0 m-0 border-none cursor-pointer flex items-center"
            aria-expanded={isOpen}
            aria-controls="dropdown-menu"
          >
            <ChevronDown className="h-4 sm:h-5 w-4 sm:w-5 text-black border-2 border-black rounded-full" />
          </button>

          {isOpen && (
            <div
              id="dropdown-menu"
              className="absolute top-full mt-1 right-0 sm:right-auto sm:left-[-3.5rem] bg-[#EDEAE0] w-[36vw] sm:w-[147px] shadow-lg z-10 rounded-lg"
            >
              <Link
                to={`/${role}/profile`}
                className="text-black font-semibold flex gap-2 py-2 px-4 text-left hover:bg-[#89bbe7] hover:rounded-lg transition-all duration-200"
              >
                <UserPen className="h-4 sm:h-5 w-4 sm:w-5 text-black" /> Profile
              </Link>
              <button
                onClick={handleLogout}
                className="text-black font-semibold flex gap-2 py-2 px-4 text-left hover:bg-[#89bbe7] hover:rounded-lg transition-all duration-200"
              >
                <LogOut className="h-4 sm:h-5 w-4 sm:w-5 text-black" /> Logout
              </button>
            </div>
          )}
        </div>
        <div className="hidden sm:flex flex-col items-start">
          <span className="text-sm sm:text-xl font-semibold">
            {userDetails?.F_name || "User"}
          </span>
          <p className="text-xs sm:text-sm font-medium">
            (Login as {role || ""})
          </p>
        </div>
        <img
          src="https://media.geeksforgeeks.org/wp-content/uploads/20221210182541/Untitled-design-(30).png"
          className="h-6 sm:h-8 cursor-pointer"
          alt="Menu Icon"
          onClick={handleDrawerOpen}
        />
      </div>
    </header>
  );
};

export default Navbar;
