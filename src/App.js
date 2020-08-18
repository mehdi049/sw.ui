import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History";

import Header from "./components/Header";
import Home from "./components/Home";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />

        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
