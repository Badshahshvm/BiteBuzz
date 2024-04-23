import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../Data/FoodData.json";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const search = useSelector((state) => state.search.search);
  const category = useSelector((state) => state.category.category);
  const handleToast = (name) => {
    toast.success(`${name} is added`);
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10  justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(search.toLowerCase()); // Include all items if category is "All"
          } else {
            return category === food.category; // Filter based on the category
          }
        }).map((food) => (
          <FoodCard
            key={food.id}
            food={food}
            id={food.id}
            name={food.name}
            price={food.price}
            desc={food.desc}
            rating={food.rating}
            img={food.img}
            handleToast={handleToast}
          />
        ))}
      </div>
    </>
  );
};

export default FoodItems;
