import React from "react";
import { NavBar } from "./NavBar";
import image from "./images/Team/banana.jpeg";

function Profile() {
  return (
    <div classname="main">
      <NavBar />
      <div className="profile-items">
        <div class="row">
          <div class="column">
            <div class="c-image">
              <img src={image}></img>
            </div>
            <button className="button">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
