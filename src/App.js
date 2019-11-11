import React from 'react';
import Header from './Header';
import Body1 from './Body1';
import Menu from './Menu';
import Order from './Order';
import Home from './Home'
import Footer from './Footer';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './All.css';

function App() {
  return (
    <div>
      <Header/>
      <Router>
      <div>
        <ul>
        <li className="li">
            <Link to="/Home" className="link">Home</Link>
          </li>
          <li className="li1">
            <Link to="/Body1" className="link">Page</Link>
          </li>
          <li className="li2">
            <Link to="/Menu" className="link">Menu</Link>
          </li> 
          <li className="li3">
            <Link to="/Order" className="link"> Order</Link>
          </li> 
        </ul>

        <hr />
           
        <Route exact path="/Home"component={Home}  />
        <Route exact path="/Body1"component={Body1}  />   
        <Route path="/Menu" component={Menu}/>
        <Route path="/Order" component={Order}/>
      
      </div>
      </Router>
    </div>
  );
}

export default App;
