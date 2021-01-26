import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Groceries from "./components/Groceries";
import Reviews from "./components/Reviews";
import Home from "./components/Home";
import CompTemp from "./components/CompTemp";
import Ratings from "./components/Rating";

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    }
  }

  componentDidMount(){
    let theCookies = document.cookie;
    let hereOrNot = parseInt(theCookies.search("connect.sid"));
    let thisIsWeird = false;
    if (hereOrNot === 0) {
      this.setState({
        canAccess: true
      });
      thisIsWeird = true;
    }
    console.log(thisIsWeird);
  }

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/ratings" component={Ratings} />
              <Route path="/groceries" component={Groceries} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/comptemp" component={CompTemp} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
