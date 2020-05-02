import React from 'react';
import Index from './components/index';
import Create from './components/Create';
import Prepare from './components/Prepare';
import Update from './components/update';
import {  BrowserRouter as Router,  Route, } from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import Menu from './components/Menu';


function App() {
  return (
    <div> 
      <Header/>
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Prepare" component={Prepare}/>
        <Route path="/update/:id" component={Update}/>
      </Router>
      <Menu/>
      <Footer/>
      </div>
    
  );
}

export default App;
