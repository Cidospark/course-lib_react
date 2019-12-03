import React from 'react';
// import {Link} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


const Header = () => (
  <header>
    <span className="icn-logo"><i className="material-icons">code</i></span>
    <ul className="main-nav">
      {/* <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/teachers">Teachers</Link></li>
      <li><Link to="courses">Courses</Link></li> */}
      
      <li><NavLink exact to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
      <li><NavLink to="/teachers">Teachers</NavLink></li>
      <li><NavLink to="/courses">Courses</NavLink></li>

    </ul>    
  </header>
);

export default Header;


// Note: for you to have a working navigation, you always need a 
// combination of NavLinks and routes