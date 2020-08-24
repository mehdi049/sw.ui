import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderCategories from "./components/HeaderCategories";
import Home from "./components/Home";
import CategoryItems from "./components/CategoryItems";
import Item from "./components/Item.js";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <br />
        <HeaderCategories />
        <br />

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={CategoryItems} />
          <Route path="/item" exact component={Item} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
