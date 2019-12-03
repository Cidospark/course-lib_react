import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import the library to manage routing like above
// next wrap your Route element in the BrowserRouter element
// you imported

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Teachers from './components/Teachers'
import Courses from './components/Courses'
import NotFound from "./components/NotFound";
import Featured from "./components/Featured";

function App() {
  return ( 
    <BrowserRouter>
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/about" component={About} />
          <Route exact path="/teachers" component={Teachers} />
          <Route  path="/teachers/:topic/:lname-:fname" component={Featured} />
          <Route  path="/courses" component={Courses} />
          <Route  component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
// activeStyle = {{ background:oange;}}
// activeClassName = {{ classValue;}}
// The codes above describes the methods you can use to add style
// to a component.

export default App;
