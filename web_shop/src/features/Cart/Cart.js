//a React component that shows the UI for the counter feature
import React from 'react';
import { useSelector } from 'react-redux';
import './Cart.scss'

function Cart(){
  const cartContent = useSelector(state=> state.cart); 
  let bookInCart = cartContent.books;
  const cartTotalPrice = useSelector(state => state.cart.price);

  let booksItems = bookInCart.map(book => {
    return(
      <li key={bookInCart[book]} >
        <img src={book.book_image} alt= { `cover of ${book.title}` } />
          <h2> {book.title}</h2>
          <h3>{book.author}</h3>
      </li>
    )
  });

  let roundPrice = Math.round(cartTotalPrice * 100) / 100;

    return(
      <React.Fragment>
        <h1>Cart</h1>  
        <ul>
          {booksItems}
        </ul>
        <div>
          Total price: {roundPrice} €
        </div>
      </React.Fragment>
    )
  }

  export default Cart;