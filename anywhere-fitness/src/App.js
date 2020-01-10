import React from "react";
import Login from "./components/clients/Login";
import Home from "./components/clients/Home";
import Register from "./components/clients/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/clients/PrivateRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login/>
          </Route> 
        <Route path="/register">
        <Register />
        </Route>
        <PrivateRoute exact path="/clienthome">
          <Home/>
        </PrivateRoute>
      </div>
    </Router>
  );
}



export default App;
