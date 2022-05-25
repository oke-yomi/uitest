import React from "react";
import { Shop } from "../../img";

const Main = () => {
  return (
    <div className="flex items-center justify-center mt-16">
      <div className="flex flex-col items-center justify-center">
        <Shop />
        <p className="text-txtGray mt-2">No Paid Baskets, yet!</p>
      </div>
    </div>
  );
};

export default Main;
