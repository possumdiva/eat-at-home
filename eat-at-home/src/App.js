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
  constructor(props) {
  super(props);
  this.state = {
    }
  }



  componentDidMount(){
    let theCookies = document.cookie;
    let hereOrNot = parseInt(theCookies.search("connect.sid"));
    if (hereOrNot === 0) {
      this.setState({
        canAccess: true
      });
    }
  }

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
              <ProtectedRoute canAccess={this.state.canAccess} component={Home} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
