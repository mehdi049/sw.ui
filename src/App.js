import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./utils/History";
import PrivateRoute from "./components/PrivateRoute";
import Header from "./components/_sharedComponents/Header.js";
import Footer from "./components/_sharedComponents/Footer";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Help from "./components/Help.js";
import Terms from "./components/Terms.js";
import Ads from "./components/Ads.js";
import Home from "./components/Home";
import CategoryItems from "./components/CategoryItems";
import Item from "./components/Item.js";
import AddItem from "./components/AddItem.js";
import Profile from "./components/Profile.js";
import MyItems from "./components/MyItems.js";
import MyMessages from "./components/MyMessages.js";
import MyNotifications from "./components/MyNotifications.js";
import MyExchanges from "./components/MyExchanges.js";

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Header />
        <Switch>
          {/* <PrivateRoute path="/add-item" exact component={AddItem} />
          <PrivateRoute path="/profile" exact component={Profile} />
          <PrivateRoute path="/myItems" exact component={MyItems} />
          <PrivateRoute path="/messages" exact component={MyMessages} />
          <PrivateRoute
            path="/notifications"
            exact
            component={MyNotifications}
          />
          <PrivateRoute path="/exchanges" exact component={MyExchanges} />
  */}

          <Route path="/add-item" exact component={AddItem} />
          <Route path="/profile" exact component={Profile} />
          <Route path="/myItems" exact component={MyItems} />
          <Route path="/messages" exact component={MyMessages} />
          <Route path="/notifications" exact component={MyNotifications} />
          <Route path="/exchanges" exact component={MyExchanges} />

          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/help" exact component={Help} />
          <Route path="/ads" exact component={Ads} />
          <Route path="/terms" exact component={Terms} />
          <Route path="/category" exact component={CategoryItems} />
          <Route path="/item" exact component={Item} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
