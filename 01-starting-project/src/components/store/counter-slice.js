import { configureStore, createSlice } from "@reduxjs/toolkit";
import authSliceReducer from "./auth-slice";
const initialcounterState = { counter: 0, isShown: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialcounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.isShown = !state.isShown;
    },
  },
});
export const counterActions = counterSlice.actions;
export default counterSlice.reducer
