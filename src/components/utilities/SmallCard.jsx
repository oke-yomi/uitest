import React from "react";

const SmallCard = ({ Icon, title, tag }) => {
  return (
    <div className="w-[227px] h-[74px] rounded-lg shadow-3xl flex items-center py-3 px-6 mr-7">
      <div className="mr-6">
        <Icon />
      </div>

      <div className="flex flex-col items-start justify-center">
        <p className="text-[#6b6464] text-xs capitalize">{title}</p>
        <label className="text-[22px] font-semibold">{tag}</label>
      </div>
    </div>
  );
};

export default SmallCard;
