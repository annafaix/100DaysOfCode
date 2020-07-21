import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { increment } from './Cart/cartSlice.js'

const ProductItem = (props) => {
  const bookItem = useSelector(state => state.books);
  console.log(bookItem)
  let item = props.item;
  const dispatch = useDispatch();
  let added = () => {

  }

  return(
    <React.Fragment>
      <li key={item.key}>
        <img src={item.book_image} alt= { `cover of ${item.title}` } />
        <div>
          <h2>{item.title}</h2>
          <h3>{item.author}</h3>
          <span className="genre">{item.genre}</span>
          <p className="">{item.description.substring(0,80)}...</p>
          <div className="row">
            <p className="price">{item.price} ‎€ </p>
            <button 
              aria-label="Add to cart"
              onClick={()=> dispatch(increment(item))}
              className="addToCartBtn">
                Add to cart
              <AiOutlineShoppingCart/>
            </button>
            </div>
        </div>
      </li>
    </React.Fragment>
  )
}

export default ProductItem;