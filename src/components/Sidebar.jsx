import React from "react";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
import { SidebarData } from "../data/SidebarData";
import Logout from "../img/logout-icon.png";

const Sidebar = () => {
  return (
    <>
      <div className="flex-none py-8 pl-7 pr-5 border-r border-bgWhite top-0 left-0 max-h-screen h-screen flex flex-col items-center justify-between">
        <nav className="">
          <Link to="#" className="inline-block">
            <img src={Logo} alt="" className="h-11 w-[154px]" />
          </Link>

          <ul className="space-y-3 mt-14">
            {SidebarData.map(({ icon, path, name }, index) => (
              <li
                key={index}
                className={`py-3 rounded-lg px-3 block hover:bg-slate-200 hover:text-primary ${
                  index === 1 ? "bg-primary hover:bg-primary" : ""
                }`}
              >
                <Link to={path} className="flex items-center justify-start">
                  <img src={icon} alt="name" />
                  <span
                    className={`capitalize text-base ml-3 ${
                      index === 1 ? "text-txtWhite" : "text-txtGrayBold"
                    }`}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex-col items-center justify-center text-center">
          <label className="inline-flex items-center justify-center bg-[#1A8282] rounded-full font-bold text-[28px] text-txtWhite w-14 h-14">
            LE
          </label>
          <h3 className="capitalize font-semibold mt-1 mb-[3px]">
            Laura edson
          </h3>
          <p className="font-light text-[#C0C0C0] text-xs mb-4">
            lauraedson@work.com
          </p>
          <span className="inline-block border p-[10px] rounded-md border-[#C4C4C4]">
            <img src={Logout} alt="" />
          </span>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
