import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneShopping, increaseCount } from "../features/cartSlice";
import { ChevronDown, Coconut } from "../img";
import CartItem from "./utilities/CartItem";

const Cart = ({ showCart, defaultCardDetails }) => {
	const dispatch = useDispatch();
	const { cartItems, total } = useSelector((store) => store.cart);

	return (
		<div className="z-50 border-l h-screen absolute right-0 top-0 bottom-0 bg-white overflow-y-hidden">
			{/* header */}
			<header className="pl-5 flex items-center justify-between">
				<span className=" inline-flex items-center justify-start">
					<img
						src={require("../img/right-arrow.png")}
						alt="close"
						className="inline-block w-4 h-3 mr-10 cursor-pointer"
						onClick={() => {
							showCart();
							defaultCardDetails();
						}}
					/>
					<p className="text-[#2e2c2c] text-xl capitalize font-semibold whitespace-nowrap">
						my cart
					</p>
				</span>

				<CartItem />
			</header>

			{/* items */}
			<ul className=" px-5 overflow-y-scroll">
				{cartItems.map(({ id, foodName, pricing, Image, amount }) => (
					<li
						key={id}
						className="w-[445px] bg-cardBg flex items-center justify-between rounded-xl px-5 py-6 mb-[10px]">
						<div className="flex items-center justify-start">
							<Coconut />
							<span className="flex flex-col items-start justify-center ml-[14px] mr-8">
								<label className="text-xs text-[#514d4d] capitalize whitespace-nowrap text-ellipsis overflow-hidden w-20">
									{foodName}
								</label>
								<p className="font-bold text-[22px]">${pricing}</p>
							</span>

							<div className="w-20 h-[26px] text-center rounded-md bg-white flex items-center justify-center space-x-3">
								<p className="text[13px] font-bold">{amount} kg</p>
								<button
									className="text-center inline-block outline-none border-none"
									onClick={() => {
										dispatch(increaseCount({ id }));
									}}>
									<ChevronDown />
								</button>
							</div>
						</div>

						{Image}
					</li>
				))}
			</ul>

			{/* footer */}
			<footer className="py-[18px] px-5 flex items-center justify-between shadow-4xl rounded-[1px] absolute w-full bottom-0">
				<div className="flex flex-col items-start justify-center">
					<label htmlFor="" className="text-[15px] uppercase text-txtGray">
						Total
					</label>
					<p className="font-bold text-xl">${total}</p>
				</div>

				<button
					className="font-bold text-[15px] text-txtWhite text-center py-2 px-7 bg-primary border-none outline-none rounded-[3px]"
					onClick={() => {
						dispatch(doneShopping());

						alert(`Shopping Completed! 
            Basket Empty`);
					}}>
					Done Shooping
				</button>
			</footer>
		</div>
	);
};

export default Cart;
