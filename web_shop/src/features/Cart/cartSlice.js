//the Redux logic for the cart feature

import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name:'cart',
  initialState:{
    value:0,
    price: 0, 
    books: []
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
      state.price += action.payload.price;
      state.books.push(action.payload) 
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const {increment, decrement } = cartSlice.actions;
export default cartSlice.reducer;