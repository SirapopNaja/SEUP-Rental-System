import React from 'react';
import Index from './components/index';
import Create from './components/Create';
import Request from './components/Request';
import Prepare from './components/Prepare';
import Update from './components/update';
import Login from './components/Login'
import Register from './components/Register';
import {  BrowserRouter as Router,  Route, } from "react-router-dom";
import Header from './components/Header';
import Menu from './components/Menu';
import PrepareEquipment from './components/PrepareEquipment';
import Managemembers from './components/Managemembers';
import Returndevice from './components/Returndevice';


function App() {
  return (
    <div> 
      <Header/>
      <Router>
        <Route exact path="/" component={Index}/>
        <Route path="/Create" component={Create}/>
        <Route path="/Prepare" component={Prepare}/>
        <Route path="/Request" component={Request}/>
        <Route path="/Login" component={Login}/>
        <Route path="/Login" component={Login}/>
        <Route path="/PrepareEquipment" component={PrepareEquipment}/>
        <Route path="/Managemembers" component={Managemembers}/>
        <Route path="/Returndevice" component={Returndevice}/>
        <Route path="/update/:id" component={Update}/>
      </Router>
      <Menu/>
      
      </div>
    
  );
}

export default App;
