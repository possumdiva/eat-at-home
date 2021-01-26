import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import image1 from "./images/Team/Wilcott.jpeg";
import image2 from "./images/Team/Luttrell.jpeg";
import image3 from "./images/Team/Graham.jpeg";

function Profile() {
  return (
    <div classname="main">
      <NavBar />
      <button>Logout</button>
      <div class="header-image" alt=""></div>
      <div class="row">
        <div class="column">
          <div class="c-image">
            <img src={image1}></img>
          </div>
          <div class="c-image">
            <img src={image2}></img>
          </div>
          <div class="c-image">
            <img src={image3}></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
