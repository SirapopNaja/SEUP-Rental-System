import React from 'react';
import Index from './components/index';
import Create from './components/create';
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
<<<<<<< HEAD
        <Route path="/Login" component={Login}/>
        <Route path="/Register" component={Register}/>
=======
        <Route path="/Request" component={Request}/>
        <Route path="/PrepareEquipment" component={PrepareEquipment}/>
        <Route path="/Managemembers" component={Managemembers}/>
        <Route path="/Returndevice" component={Returndevice}/>
>>>>>>> 1f9ad1de7a543affb63b2fcb7dfdf5e5c24917be
        <Route path="/update/:id" component={Update}/>
      </Router>
      <Menu/>
      
      </div>
    
  );
}

export default App;
