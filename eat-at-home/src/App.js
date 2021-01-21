import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Groceries from "./components/Groceries";
import Kits from "./components/Kits";
import Meals from "./components/Meals";
import Reviews from "./components/Reviews";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import CompTemp from "./components/CompTemp";

class App extends Component {
  render() {
    return (
      <div>
        <div className="nav">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/ratings" component={Ratings} />
              <Route path="/groceries" component={Groceries} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/favorites" component={Favorites} />
              <Route path="/comptemp" component={CompTemp} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
