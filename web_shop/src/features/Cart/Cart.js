//a React component that shows the UI for the counter feature
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Cart(){
 const cartContent = useSelector(state=> state.cart); 
 const booksInCart = cartContent.books;

 let booksItems = booksInCart.map((book) => {
  return(
    <li key={book.id} >
      <img src={book.book_image} alt= { `cover of ${book.title}` } />
      
          <h2> {book.title}</h2>
          <h3>{book.author}</h3>
    </li>
   )
 });

  return(
    <React.Fragment>
      <h1>Cart</h1>  
      <ul>
        {booksItems}
      </ul>
      <div>
        Total price: {cartContent.price}
      </div>
    </React.Fragment>
  )
}

export default Cart;