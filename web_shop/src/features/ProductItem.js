import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart, AiOutlineCheck } from 'react-icons/ai';
import { increment } from './Cart/cartSlice.js'

export const ProductItem = (props) => {
  const bookItem = useSelector(state => state.books);
  let item = props.item;
  const dispatch = useDispatch();
  const addToCart = "Add to Cart";
  const cartIcon = <AiOutlineShoppingCart/>;
  let [add, handleAdd] = useState(addToCart);
  let [icon, handleIcon] = useState(cartIcon);

  let timeoutHandle =()=> {
    handleAdd("Added");
    handleIcon(<AiOutlineCheck/>)
    setTimeout(()=> {
      handleAdd(addToCart) 
      handleIcon(cartIcon)
    }, 1000);
    
  }

  return(
    <React.Fragment>
      <li key={item.key}>
        <img src={item.book_image} alt= { `cover of ${item.title}` } />
        <div>
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <span className="genre">{item.genre}</span>
          <p>{item.description.substring(0,80)}...</p>
          <div className="row">
            <p className="price">{item.price} ‎€ </p>
            <button 
              aria-label="Add to cart"
              onClick={()=> dispatch(increment(item), timeoutHandle())}
              className="addToCartBtn">
                {add}
                {icon}
            </button>
            </div>
        </div>
      </li>
    </React.Fragment>
  )
}

export default ProductItem;