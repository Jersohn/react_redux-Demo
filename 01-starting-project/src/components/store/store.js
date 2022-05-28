import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from './auth-slice'
import counterSliceReducer from "./counter-slice";

const store = configureStore({
    reducer: { count: counterSliceReducer, auth: authSliceReducer },
  });
  export default store;