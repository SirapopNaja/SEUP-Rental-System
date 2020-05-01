import React from 'react';

import Index from './components/index';
import Create from './components/create';
import Update from './components/update';


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Content from './components/Content';
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';


function App() {
  return (
    
    <div> 
      <Header/>
      
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/create" component={Create}/>
        <Route path="/update/:id" component={Update}/>
      </Router>
      
      <Menu/>
      <Content/>
      <Footer/>
      </div>
    
  );
}

export default App;
