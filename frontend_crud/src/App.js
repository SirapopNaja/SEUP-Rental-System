import React from 'react';

import Index from './components/index';
import Create from './components/create';
import Update from './components/update';
import Navbar from './components/navbar';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <Navbar />
      <Route exact path="/" component={Index} />
      <Route path="/create" component={Create} />
      <Route path="/update/:id" component={Update} />
      <Route path="/Navbar" component={Navbar} />
    </Router>

  );
}

export default App;
