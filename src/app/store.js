import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/car/carslice"


export const store = configureStore({
  reducer: {
   car:carReducer
  },
});
