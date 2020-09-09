import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/Home";
import Mark from "./components/Mark";
import Check from "./components/Dashboard/Check";
import Register from "./components/Register";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <Router className="App">
      <div>
        <Route path="/" exact strict component={Home} />
        <Route path="/Mark" exact strict component={Mark} />
        <Route path="/Check" exact strict component={Check} />
        <Route path="/Register" exact strict component={Register} />
        <Route path="/Login" exact strict component={Login} />
        <Route path="/Dashboard" exact strict component={Dashboard} />
      </div>
    </Router>
  );
}

export default App;
