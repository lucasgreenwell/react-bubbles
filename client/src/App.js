import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";

import PrivateRoute from './tools/PrivateRoute'
import BubblePage from './components/BubblePage'
 function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path='/bubblespage' component={BubblePage}/>
      </div>
    </Router>
  );
}

export default App;
