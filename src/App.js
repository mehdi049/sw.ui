import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History";

import Header from "./components/_sharedComponents/Header.js";
import Footer from "./components/_sharedComponents/Footer";

import Home from "./components/Home/Home";

import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Help from "./components/Help.js";
import Terms from "./components/Terms.js";
import Ads from "./components/Ads.js";

import CategoryItems from "./components/Item/CategoryItems";
import Item from "./components/Item/Item.js";

import AddItem from "./components/User/AddItem.js";
import Profile from "./components/User/Profile.js";
import MyItems from "./components/User/MyItems.js";
import MyMessages from "./components/User/MyMessages.js";
import MyNotifications from "./components/User/MyNotifications.js";
import MyExchanges from "./components/User/MyExchanges.js";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  if (localStorage.getItem("token") !== null) {
    let token = JSON.parse(localStorage.getItem("token"));
    var expiration = new Date(token.expiration);
    let expirationDate = Date.parse(expiration);
    var today = Date.parse(new Date());
    if (expirationDate <= today) {
      localStorage.removeItem("token");
      localStorage.removeItem("categoryFilter");
      localStorage.removeItem("user");
    }
  }

  return (
    <div className="App">
      <Router history={history}>
        <div id="wrap">
          <Header />
          <Switch>
            <Route path="/add-item" exact component={AddItem} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/my-items" exact component={MyItems} />
            <Route path="/messages" exact component={MyMessages} />
            <Route path="/notifications" exact component={MyNotifications} />
            <Route path="/exchanges" exact component={MyExchanges} />

            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
            <Route path="/help" exact component={Help} />
            <Route path="/ads" exact component={Ads} />
            <Route path="/terms" exact component={Terms} />
            <Route path="/category/:id" exact component={CategoryItems} />
            <Route path="/item/:id" exact component={Item} />
          </Switch>
        </div>
        <Footer />
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
      />
    </div>
  );
}

export default App;
