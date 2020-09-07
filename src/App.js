import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History";
import Header from "./components/_sharedComponents/Header.js";
import Footer from "./components/_sharedComponents/Footer";
import Home from "./components/Home";
import CategoryItems from "./components/CategoryItems";
import Item from "./components/Item.js";
import Profile from "./components/Profile.js";
import MyItems from "./components/MyItems.js";
import MyMessages from "./components/MyMessages.js";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <br />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/category" exact component={CategoryItems} />
          <Route path="/item" exact component={Item} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/myItems" exact component={MyItems} />
          <Route path="/myMessages" exact component={MyMessages} />
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
