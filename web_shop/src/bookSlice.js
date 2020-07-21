//the Redux logic for the books 

import { createSlice } from '@reduxjs/toolkit';
import books from './products.json'

const initialState = books;
export const bookSlice = createSlice({
  name:'books',
  initialState,
  reducers: {}
})

/* export const { show } = bookSlice.actions;*/
export default bookSlice.reducer;