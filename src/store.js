import { configureStore } from '@reduxjs/toolkit';
import atmReducer from './ex4_atm/atmSlice'; 

export const store = configureStore({
  reducer: {
    atm: atmReducer,
  },
});