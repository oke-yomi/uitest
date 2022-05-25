import React, { useState } from "react";
import { Cart, CartButton, Heading, Main } from "../components";
import { Cards } from "../data/Heading";

const Baskets = () => {
	const [cartOpen, setCartOpen] = useState(false);
	const [cardDetails, setCardDetails] = useState(Cards.slice(0, 3));

	const updateCardDetails = () => setCardDetails(Cards.reverse());

	const showCart = () => setCartOpen(!cartOpen);

	const defaultCardDetails = () => {
		Cards.reverse();
		setCardDetails(Cards.slice(0, 3));
	};

	return (
		<>
			<div className="flex-1 max-h-screen h-screen py-11 px-6 ">
				<Heading cardDetails={cardDetails} />

				<Main />

				{cartOpen ? (
					<Cart showCart={showCart} defaultCardDetails={defaultCardDetails} />
				) : (
					""
				)}
				<CartButton showCart={showCart} updateCardDetails={updateCardDetails} />
			</div>
		</>
	);
};

export default Baskets;
