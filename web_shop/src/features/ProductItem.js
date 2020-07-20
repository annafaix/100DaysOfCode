import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { increment } from './Cart/cartSlice.js'

function ProductItem(props){
  let item = props.item;
  const dispatch = useDispatch();
  return(
    <React.Fragment>
     <a >
      <li>
        <img src={item.book_image} alt= { `cover of ${item.title}` } />
        <div>
          <h2> {item.title}</h2>
          <h3>{item.author}</h3>
          <button 
            aria-label="Add to cart"
            onClick={()=> dispatch(increment(item))}
            className="price">
            {item.price} ‎€ 
            <AiOutlineShoppingCart/>
            </button>
        </div>
      </li>
    </a>
    </React.Fragment>
  )
}

export default ProductItem;