import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Home from "./components/Home";
import CompTemp from "./components/CompTemp";
import ProtectedRoute from "./components/ProtectedRoute"

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="nav">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <ProtectedRoute path="/profile" component={Profile} />
              <Route path="/about" component={About} />
              <Route path="/comptemp" component={CompTemp} />
              <ProtectedRoute component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
