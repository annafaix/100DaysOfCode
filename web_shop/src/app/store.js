import  { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/Cart/cartSlice' 
import bookReducer from '../bookSlice.js';

export default configureStore({
  reducer: {
    cart: cartReducer,
    books: bookReducer
  }
}) 
