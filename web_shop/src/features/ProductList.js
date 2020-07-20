import React, { useEffect } from 'react';
import ProductItem from './ProductItem';

function ProductList(props){
  let books = props.products;

   // Why not display products in different order when comoponent will mount? 
 let shuffleArray = (arr) => {
  let index = arr.length;
  let tempValue, randomIndex; 
  while(index !== 0){
    // take random number 0-1 and multiply with length of array, then get rid of decimal
    randomIndex = Math.floor(Math.random() * index);
    index--;
    // save temporary number to shuffle
    tempValue = arr[index];
    // shuffle two positions
    arr[index] = arr[randomIndex];
    arr[randomIndex] = tempValue;
  }
}

/*   useEffect(() =>{
    updateList(shuffleArray(list)) ;
  }, []) */

  let booksItems = books.map((element) => {
    return(
      <ProductItem item={element} key={element.id} />
     )
   });

  return(
    <React.Fragment>
    <ul className="bookList">
      {booksItems}
    </ul>
  </React.Fragment>
  )
}

export default ProductList;