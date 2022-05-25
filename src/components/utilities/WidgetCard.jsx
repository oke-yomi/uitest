import React from "react";

const WidgetCard = ({title, description}) => {
	return (
		<div className="border border-bgWhite py-6 px-5 flex flex-col">
    <h3 className="uppercase mb-2 font-bold">{title}</h3>
      <p className='text-txtGray font-normal text-xs'>{description}</p>
		</div>
	);
};

export default WidgetCard;
