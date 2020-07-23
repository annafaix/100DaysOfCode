//a React component that shows the UI for the counter feature
import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import './Cart.scss'

function Cart(){
  const cartItems = useSelector(state=> state.cart); 
  let bookInCart = cartItems.books;
  const cartTotalPrice = useSelector(state => state.cart.price);

  let booksItems = bookInCart.map(book => {
    return(
      <li key={cartItems[book]} className="itemInCart">
        <div>
          <h2> {book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        <div>
          <p>{book.price} €</p>
          <button className="removeFromCartBtn"><FaRegTrashAlt/> </button>
        </div>
      </li>
    )
  });

  let roundPrice = Math.round(cartTotalPrice * 100) / 100;
  let cartContent = (bookInCart.length === 0) ? "Your cart is empty" : null;
  
    return(
      <React.Fragment>
        <div className="introduction">
         <h1 >Cart</h1>  
         {cartContent}
         </div>
         <ul className="cartList">{booksItems} </ul>
        <div className="amountToPay">
          Total price: {roundPrice} €
        </div>
      </React.Fragment>
    )
  }

  export default Cart;