import react, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./style.css";
import Profile from './components/Profile';
import About from './components/About';
import Food from './components/Food';
import Ratings from './components/Ratings';
import Reviews from './components/Reviews';
import Favorites from './components/Favorites';
import Home from './components/Home';



class App extends Component {

  render() {
    return (
      <div>
      <hi>hello</hi>
      
      <div className="nav"> 

      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/about" component={About} />
          <Route path="/food" component={Food} />
          <Route path="/ratings" component={Ratings} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/favorites" component={Favorites} />
        </Switch>
      </Router>








      </div>
      </div>
      
    )
  }
}

export default App;