import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sidebar, Widgets } from "./components";
import { calculateTotal } from "./features/cartSlice";
import { Baskets } from "./pages";

const App = () => {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(calculateTotal());
	}, [dispatch, cartItems]);

	return (
		<div className="flex relative">
			<Router>
				<Sidebar />

				<Routes>
					<Route path="/">
						<Route index element={<Baskets />} />
					</Route>
				</Routes>

				<Widgets />
			</Router>
		</div>
	);
};

export default App;
