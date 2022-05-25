import React from "react";
import WidgetCard from "./utilities/WidgetCard";

const Widgets = () => {
	return (
		<>
			<div className="w-[250px] border-l border-bgWhite flex-none right-0 top-0 max-h-screen h-screen grid grid-rows-10">
				<WidgetCard title="invites" description="You have no invites." />
				<WidgetCard
					title="recent payments"
					description="No Payment has been made."
				/>
				<WidgetCard
					title="previous orders"
					description="You have created no order."
				/>
			</div>
		</>
	);
};

export default Widgets;
