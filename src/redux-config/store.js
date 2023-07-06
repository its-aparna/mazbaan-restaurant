import { configureStore } from "@reduxjs/toolkit";
import restSlice from "./restSlice";

const store = configureStore({
    reducer:{
        rest: restSlice
    }
});

export default store;