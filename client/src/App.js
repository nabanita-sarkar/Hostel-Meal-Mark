import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Drawer from "../src/components/Dashboard/Drawer";

function App() {
  return (
    <Router className="App">
      <div>
        <Route path="/" exact strict component={Home} />
        <Route path="/Register" exact strict component={Register} />
        <Route path="/Login" exact strict component={Login} />
        <Route path="/Dashboard" exact strict component={Drawer} />
      </div>
    </Router>
  );
}

export default App;
