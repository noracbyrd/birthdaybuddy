import React, { Component } from "react"
import { Route } from "react-router-dom"
import "./App.css"
import Login from "./pages/login.js"
import Signup from "./pages/signup.js"

function App() {
  return (
    <div className="App">
     <nav>
       <ul>
         <li>Login</li>
         <li>Sign Up</li>
       </ul>
     </nav>
     <Route
          exact path="/login"
          component={Login} />
        <Route
          exact path="/signup"
          component={Signup} />
    </div>
  );
}

export default App;
