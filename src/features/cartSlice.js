import { createSlice } from "@reduxjs/toolkit";
import { FoodList } from "../data/CartData";

const initialState = {
	// cartItems: [],
	cartItems: FoodList,
	amount: FoodList.length,
	total: 0,
};

const cartSlice = createSlice({
	name: "cart",
	initialState,
	reducers: {
		doneShopping: (state) => {
			state.cartItems = [];
			// return { cartItems: [], amount: 0 };
		},

		increaseCount: (state, { payload }) => {
			const cartItem = state.cartItems.find((item) => item.id === payload.id);
			cartItem.amount = cartItem.amount + 1;
		},

		calculateTotal: (state) => {
			let amount = 0;
			let total = 0;

			state.cartItems.forEach((item) => {
				amount += item.amount;
				total += item.pricing * item.amount;
			});

			state.amount = amount;
			state.total = total;
		},
	},
});

export const { doneShopping, increaseCount, calculateTotal } = cartSlice.actions;

export default cartSlice.reducer;
