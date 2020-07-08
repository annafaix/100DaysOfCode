import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function Navigation(){
  
  return (
  <Router>
    <nav className="navigation">
      <ul className="list">
        <li><Link to="/"> Products</Link> </li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  </Router>
  )
}

function Cart(){
  return(
    <h1>Hello from Cart and company</h1>  
  )
}

function ProductList(){
  return(
    <h1>Hello, product list here</h1>
  )

}

function Product(id){


}

function App() {
  return (
    <div className="App">
      <header >
       <Navigation/>
      </header>
      <main>
        <Router>
        <Switch>
          <Route path="/cart">
            <Cart/>
          </Route>
          <Route path="/">
            <ProductList/>
          </Route>
        </Switch>
        </Router>
      </main>
    </div>
  );
}

export default App;
