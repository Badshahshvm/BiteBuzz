import React from "react";
import { AiFillStar } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { addToCart } from "../redux/Slice/CardSlice";

const FoodCard = ({ id, img, desc, rating, name, price, handleToast }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex">
        <div className="font-bold w-[250px] bg-white p-5  flex flex-col gap rounded-lg  gap-2">
          <img
            src={img}
            alt=""
            className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out"
          />
          <div className="text-sm flex justify-between">
            <h2>{name}</h2>
            <span className="text-yellow-800"> ₹{price}</span>
          </div>
          <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>

          <div className="flex justify-between">
            <span className="flex justify-center item-center">
              <AiFillStar className="mr-1 text-blue-400" /> {rating}
            </span>
            <button
              className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
              onClick={() => {
                dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
                handleToast(name);
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCard;
