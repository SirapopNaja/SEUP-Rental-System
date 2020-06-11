import React from 'react';
import Index from './components/index';
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
import Requestmembers from './components/Requestmembers';
import userhome from './components/userhome';
import studenthome from './components/studenthome';
import teacherhome from './components/teacherhome';
import Basket from './components/Basket';

function App() {
  return (
   
    <div> 
      {(window.location.pathname!=='/')&&(window.location.pathname!=='/Register')&&<div>
        <Header/>
        <Menu/>
      </div>}    
      <Router>
      <Route exact path="/" component={Login}/>
        <Route path="/Register" component={Register}/>
        <Route path="/index" component={Index}/>
        <Route path="/Prepare" component={Prepare}/>
        <Route path="/Request" component={Request}/>
        <Route path="/Basket" component={Basket}/>
        <Route path="/studenthome" component={studenthome}/>
        <Route path="/userhome" component={userhome}/>
        <Route path="/teacherhome" component={teacherhome}/>
        <Route path="/PrepareEquipment" component={PrepareEquipment}/>
        <Route path="/Managemembers" component={Managemembers}/>
        <Route path="/Returndevice" component={Returndevice}/>
        <Route path="/Requestmembers/:id" component={Requestmembers}/>
        <Route path="/update/:id" component={Update}/>
        </Router>
       
      
       
      </div>
    
  );
}

export default App;
