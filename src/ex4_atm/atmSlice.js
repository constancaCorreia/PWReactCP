import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  saldo: 1000, 
};

export const atmSlice = createSlice({
  name: 'atm', 
  initialState,
  reducers: {
    depositar: (state, action) => {
      state.saldo += Number(action.payload);
    },
    levantar: (state, action) => {
      state.saldo -= Number(action.payload);
    },
  },
});

export const { depositar, levantar } = atmSlice.actions;

export default atmSlice.reducer;