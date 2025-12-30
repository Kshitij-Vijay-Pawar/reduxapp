import { configureStore } from "@reduxjs/toolkit";
import SearchReducer from "./features/searchSlice";
import collectionReducer from "./features/collecionSlice";

const store = configureStore({
  reducer: {
    search: SearchReducer,
    collection: collectionReducer,
  },
});

export default store;