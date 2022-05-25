import React from "react";
import { useSelector } from "react-redux";
import { CartImg } from "../../img";

const CartItem = () => {
  // const amount = useSelector((store) => store.cart.amount)
  const { amount } = useSelector((store) => store.cart);

  return (
    <>
      <div className="relative inline-block cursor-pointer">
        <CartImg />
        <span className="h-4 w-4 bg-white font-bold text-xs text-center absolute top-5 right-7 rounded-full inline-flex items-center justify-center">
          {amount}
        </span>
      </div>
    </>
  );
};

export default CartItem;
