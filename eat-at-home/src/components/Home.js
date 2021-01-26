import React from "react";
// import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import image from "./images/Header.jpeg";
import Meals from "./Meals";
import Kits from "./Kits";
import Groceries from "./Groceries";

function Home() {
  return (
    <div className="main">
      <NavBar />
      <h2>
        <span>EAT @ HOME</span>
      </h2>
      <div className="header-image">
        <img src={image} alt="header"></img>
      </div>
      <div className="feature-divider"></div>
      <hr size="2" width="600px" color="black"></hr>
      <div className="text">
        <p>
          With so many of us eating at home these days, it can get exhausting
          trying to keep your meals tasty and exciting.
        </p>{" "}
        <p>
          {" "}
          Grocery stores can be overwhelming and sometimes you just don't want
          to cook...
        </p>
        <p>
          We totally understand and are here to help you choose some options
          that can help with that fatigue!
        </p>{" "}
        <p> From produce delivery to full meals </p>{" "}
        <p className="bold-text">Eat @ Home</p>{" "}
        <p>
          {" "}
          provides a comprehensive collection of the best companies online to
          deliver what you need
        </p>{" "}
        <p>right to your doorstep!</p>
        <div classame="bold-text">
          <a href="http://localhost:8080/auth/github"><button className="button">Login</button></a>
        </div>
      </div>
      <div className="feature-divider"></div>
      <hr size="2" width="600px" color="black"></hr>

      <Meals />
      <div className="feature-divider"></div>
      <Kits />
      <Groceries />
    </div>
  );
}

export default Home;
