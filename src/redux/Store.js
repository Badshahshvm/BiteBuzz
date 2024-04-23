import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../../src/redux/Slice/CardSlice";
import CateogrySlice from "./Slice/CateogrySlice";
import SearchSlice from "./Slice/SearchSlice.jsx";

const store = configureStore({
  reducer: {
    cart: cartSlice, // Access the reducer property of the slice
    category: CateogrySlice,
    search: SearchSlice,
  },
});

export default store;
