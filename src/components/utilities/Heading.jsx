import React from "react";
import SmallCard from "./SmallCard";
import SearchIcon from "../../img/search-icon.png";
import { List } from "../../data/Heading";

const Heading = ({ cardDetails }) => {
  return (
    <>
      <header className="flex items-center justify-between pr-20">
        <h2 className="font-semibold text-3xl capitalize">
          Good evening, Laura!
        </h2>

        <div className="input border rounded-md flex items-center justify-center p-2">
          <img src={SearchIcon} alt="" className="inline-block w-4 h-4" />
          <input
            type="text"
            placeholder="Search Basket"
            className="w-full ml-2 inline-block text-sm placeholder:text-[#C7C3C3] border-none outline-none"
          />
        </div>
      </header>

      <div className="mt-6 mb-10 grid grid-cols-3 gap-y-2 w-max">
        {cardDetails.map(({ Icon, title, tag }, index) => (
          <SmallCard key={index} Icon={Icon} title={title} tag={tag} />
        ))}
      </div>

      <div className="border-b">
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-2xl capitalize">Baskets</h1>
          <button className="text-center text-xs text-txtWhite font-medium capitalize border-none outline-none py-2 px-5 rounded-[4px] bg-primary">
            create basket
          </button>
        </div>

        <ul className="capitalize font-medium text-[15px] text-[#c0c0c0] flex items-center justify-start space-x-2 mt-4">
          {List.map(({ title, status }, index) => (
            <li
              key={index}
              className={`cursor-pointer p-2 rounded-sm hover:bg-slate-200 ${
                status === "active"
                  ? "border-primary text-primary border-b-2"
                  : "hover:border-b-2 hover:text-primary"
              }`}
            >
              {title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Heading;
