//a React component that shows the UI for the counter feature
import React from 'react';
import { useSelector } from 'react-redux';
import { FaRegTrashAlt } from "react-icons/fa";
import './Cart.scss'

function Cart(){
  const cartItems = useSelector(state=> state.cart); 
  const bookInCart = cartItems.books;
  const cartTotalPrice = useSelector(state => state.cart.price);

  console.log(cartItems)
 
  let booksItems = bookInCart.map(book => {
    return(
      <li key={cartItems[book]} className="itemInCart">
        <div>
          <h2> {book.title}</h2>
          <h3>{book.author}</h3>
        </div>
        <div className="itemInCartRow">
          <button className="removeFromCartBtn" aria-label="Remove from cart"><FaRegTrashAlt/> </button>
          <p>{book.price} €</p>
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