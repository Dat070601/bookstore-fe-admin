import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./reducers/AuthReducer";
import ProductReducer from "./reducers/ProductReducer";
import { categoriesReducer } from "./reducers/CategoryReducer";
import { publisherReducer } from "./reducers/PublisherReducer";
import { authorReducer } from "./reducers/AuthorReducer";
import { orderReducer } from "./reducers/OrderReducer";
import MessageReducer from "./reducers/MessageReducer";
import StatisticalReducer from "./reducers/StatisticalReducer";

const store = configureStore({
    reducer: {
        ProductReducer,
        authReducer,
        categoriesReducer,
        publisherReducer,
        authorReducer,
        orderReducer,
        MessageReducer,
        StatisticalReducer
    }
})

export default store;