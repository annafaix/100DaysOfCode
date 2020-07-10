import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.scss';
import logo from './default-monochrome-black.svg'
import products from './products.json';
 
function Navigation(){
  return (
    <nav className="navigation">
      <img src={logo} alt="Logo"  className="logo"/>
      <ul className="navigation-menu">
        <li><Link to="/">All Books</Link> </li>
        <li><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  )
}

function Cart(){
  return(
    <h1>Hello from Cart and company</h1>  
  )
}

function ProductList(){
  const booksItem = products.map((element) => {
    let style = {
      backgroundImage: `url('${element.book_image}')`
    }
   return(
    <a key={element.id}>
      <li style={style} >
        <img src={element.book_image} alt= { `cover of ${element.title}` } />
        <h2> {element.title}</h2>
        <h3>{element.author}</h3>
        <p className="price">{element.price} ‎€</p>
      </li>
    </a>)
  });

  return(
    <React.Fragment>
      <h1>Books to read in summer</h1>
      <ul className="bookList">
        {booksItem}
      </ul>
    </React.Fragment>
  )
}

function ProductDetail(id){
  return(
    <React.Fragment>
      <span>Back to list</span>
      <div>
        <img src="" alt="cover of">Img</img>
        <h1>Title</h1>
        <h2>Author</h2>
        <p>Description</p>
      </div>
    </React.Fragment>
  )
}

function App() {
  let [list, updateList] = useState(products);

  useEffect(() =>{
    updateList(list=products);
  })
  return (
    <div className="App">
      <Router>
        <header >
          <Navigation></Navigation>
        </header>
          <Switch>
            <Route path="/cart" component={Cart} />
            <Route exact path="/" component={ProductList} />
          </Switch>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;
