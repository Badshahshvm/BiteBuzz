import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CardItem from "./CardItem";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const FoodKart = () => {
  const naviagte = useNavigate();
  const cartItem = useSelector((state) => state.cart.cart);
  console.log(cartItem);
  const [active, setActive] = useState(false);
  const totalItem = cartItem.reduce((total, item) => total + item.qty, 0);
  const totalPrice = cartItem.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  return (
    <>
      <div
        className={`fixed right-0 top-0  w-full lg:w-[20vw] h-full bg-white p-5 ${
          active ? "translate-x-0" : "translate-x-full"
        } transition-all duratin-500 z-50`}
      >
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-blue-500">My order</span>
          <IoMdClose
            className="border-gray-600 text-gray-600 font-bold rounded-md p-1 text-4xl hover:text-red-300 hover:border-red-300 cursor-pointer"
            onClick={() => {
              setActive(!active);
            }}
          />
        </div>
        {cartItem.length > 0 ? (
          cartItem.map((food) => {
            return (
              <CardItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="trxt-center text-xl text-yellow-500 font-bold text-center">
            Your Cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold">Items: {totalItem}</h3>
          <h3 className="font-semibold">Total amount: {totalPrice}</h3>
          <hr className="w-[90vw] lg:w-[18vw]" />
          <button
            className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg  w-[90vw] lg:w-[18vw] mb-2"
            onClick={() => {
              naviagte("/sucess");
            }}
          >
            Checkout
          </button>
        </div>
      </div>
      <FaShoppingCart
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4  cursor-pointer ${
          totalItem > 0 && "animate-bounce delay-500 transition-all"
        }`}
        onClick={() => {
          setActive(!active);
        }}
      />
    </>
  );
};

export default FoodKart;
