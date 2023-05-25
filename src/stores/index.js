import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/AuthReducer";
import ProductReducer from "./reducers/ProductReducer";

const store = configureStore({
    reducer: {
        ProductReducer,
        authReducer
    }
})

export default store;