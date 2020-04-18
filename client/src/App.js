import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import "bootstrap/dist/css/bootstrap.min.css";

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
