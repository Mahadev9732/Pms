import React, { useState } from "react";
import { Link } from "react-router-dom";
import controlIcon from "../../assets/images/control.png";
import IntroImg from "../../assets/images/presentation.png";
import ContactUs from "../../assets/images/cotactUs.png";
import AboutUs from "../../assets/images/aboutUs .png";
import DashboardImg from "../../assets/images/dashboard.png";
import { getRole } from "../../_helper/authentication";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const currentYear = new Date().getFullYear();

  const role = getRole();

  const Menus = [
    {
      title: "Introduction",
      src: IntroImg,
      route: `/${role.toLowerCase()}/introduction/${currentYear}`,
    },
    {
      title: "Dashboard",
      src: DashboardImg,
      route: `/${role.toLowerCase()}/dashboard/${currentYear}`,
    },
    { title: "Contact Us", src: ContactUs, route: "/contact-us" },
    { title: "About Us", src: AboutUs, route: "/about-us" },
  ];

  return (
    <div className="flex mt-0 lg:mt-16">
      <div
        className={`${
          open ? "w-52" : "w-20"
        } bg-green-700 h-screen p-4 relative duration-300`}
      >
        <img
          src={controlIcon}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
  border-2 rounded-full ${!open && "rotate-180"} hidden sm:block`}
          onClick={() => setOpen(!open)}
        />
        <ul>
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 hover:rounded hover:bg-blue-500 hover:cursor-pointer text-white font-bold text-sm items-center gap-x-4
              ${index === 0 && "bg-light-white"} ${menu.gap ? "mt-9" : "mt-2"}`}
            >
              <Link to={menu.route} className="flex items-center gap-x-4">
                <img src={menu.src} alt={menu.title} className="w-6 h-6" />
                <span
                  className={`${!open && "hidden"} origin-left duration-200`}
                >
                  {menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
