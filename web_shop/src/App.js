import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import logo from './default-monochrome-black.svg'
import products from './products.json';
import Cart from './Cart';
import { AiOutlineShoppingCart } from 'react-icons/ai';

 
function Navigation(){
  return (
    <nav className="navigation">
      <img src={logo} alt="Logo"  className="logo"/>
      <ul className="navigation-menu">
        <li><Link to="/">All Books</Link> </li>
        <li><Link to="/cart">Cart <AiOutlineShoppingCart/></Link></li>
      </ul>
    </nav>
  )
}


function ProductList(){
  
  const booksItems = products.map((element) => {
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

function ProductItem(props){
  let item = props.item;
  return(
    <React.Fragment>
     <a >
      <li>
        <img src={item.book_image} alt= { `cover of ${item.title}` } />
        <div>
          <h2> {item.title}</h2>
          <h3>{item.author}</h3>
          <p className="price">{item.price} ‎€ <AiOutlineShoppingCart/></p>
        </div>
      </li>
    </a>
    </React.Fragment>
  )
}

function App() {
  let [list, updateList] = useState(products);

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
  useEffect(() =>{
    updateList(shuffleArray(list)) ;
  }, [])

  return (
    <div className="App">
      <Router>
        <header >
          <Navigation></Navigation>
        </header>
        <main>
          <Switch>
            <Route path="/cart" >
              <Cart/>
            </Route>
            <Route exact path="/"  >
              <div className="introduction">
                <h1>Recommended Books to read in the summer</h1>
                <p>Here you can find some inspiration for summer reading. These are the books I would like to read in the next months. 
                  <br/>Choose a book, read more details about it and "add" it to your cart/wish list! Almost like in a real online book store..
                </p>
              </div>
              <ProductList/> 
            </Route>
          </Switch>
        </main>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;
