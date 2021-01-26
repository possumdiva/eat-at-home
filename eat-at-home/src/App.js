import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import "./App.css";
import Profile from "./components/Profile";
import About from "./components/About";
import Home from "./components/Home";
import CompTemp from "./components/CompTemp";
import ProtectedRoute from "./components/ProtectedRoute"
import eahServer from "./api/eah-server";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasCookies: false,
      hasID: false,
      isLoggedIn: false
    }
  }

  async componentDidMount() {
    try {
      const testURL = "/api/user/id";
      const inquiryResponse = await eahServer.get(testURL);
      const userID = inquiryResponse.data.userID.id;
      if (userID) {
        this.setState({
          hasID: true
        })
      } else {
        this.setState({
          hasID: false
        })
      };
      let theCookies = parseInt(document.cookie.search("connect.sid"));
      if (theCookies === 0) {
        this.setState({
          hasCookies: true
        })
      } else {
        this.setState({
          hasCookies: false
        })
      }
      if (this.state.hasID === true && this.state.hasCookies === true) {
        this.setState({
          isLoggedIn: true
        })
      } else {
      }
    } catch (err) {
      }  
    }

  render() {

    return (
      <div className="App">
        <div className="nav">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <ProtectedRoute path="/profile" isLoggedIn={this.state.isLoggedIn} component={Profile} />
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
