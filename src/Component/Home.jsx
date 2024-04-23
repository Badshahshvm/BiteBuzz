import React from "react";
import Navbar from "./Navbar";
import CategoryMenu from "./CategoryMenu";
import FoodItems from "./FoodItems";
import FoodKart from "./FoodKart";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <CategoryMenu />
      <FoodItems />
      <FoodKart />
      <Footer />
    </>
  );
};

export default Home;
