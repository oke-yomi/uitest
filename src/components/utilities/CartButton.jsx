import React from "react";
import CartItem from "./CartItem";

const CartButton = ({ showCart, updateCardDetails }) => {
  return (
    <div
      className="fixed bottom-10 right-72"
      onClick={() => {
        showCart();
        updateCardDetails();
      }}
    >
      <CartItem />
    </div>
  );
};

export default CartButton;
