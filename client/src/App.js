import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import Home from "./components/Home";
import Mark from "./components/Mark";
import Check from "./components/Check";
import Register from "./components/Register";

function App() {
  return (
    <Router className="App">
      <div>
        <Route path="/" exact strict component={Home} />
        <Route path="/Mark" exact strict component={Mark} />
        <Route path="/Check" exact strict component={Check} />
        <Route path="/Register" exact strict component={Register} />
      </div>
    </Router>
  );
}

export default App;
