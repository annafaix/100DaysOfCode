import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import logo from './default-monochrome-black.svg'
import Cart from './features/Cart/Cart';
import ProductList from './features/ProductList';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux'

 
function Navigation(){
  let amountInCart = useSelector(state=> state.cart.value);
  let showAmount = (amountInCart>0) ? "inline" : "none";
  return (
    <nav className="navigation">
      <img src={logo} alt="Logo"  className="logo"/>
      <ul className="navigation-menu">
        <li><Link to="/">All Books</Link> </li>
        <li><Link to="/cart">Your Cart <AiOutlineShoppingCart/>
        <span className="amountInCart" style={{display: showAmount}}>{amountInCart}</span></Link></li>
      </ul>
    </nav>
  )
}

function App() {
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
            <Route path="/:bookId">
            </Route>
          </Switch>
        </main>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;
