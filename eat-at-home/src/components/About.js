import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import image1 from "./images/Team/Wilcott.jpeg";
import image2 from "./images/Team/Luttrell.jpeg";
import image3 from "./images/Team/Graham.jpeg";

function About() {
  return (
    <div classname="main">
      <NavBar />
      <div className="about">
        <div class="header-image" alt=""></div>
        <div class="column">
          <div class="column">
            <div class="c-image">
              <img src={image1}></img>
            </div>
            <p class="info-text">
              Elijah is a full-stack developer living in South Carolina. He has
              also worked as a photographer, prepress operator, and Chinese
              teacher. He loves good food and great films.
              https://elijahwilcott.com/
            </p>
            <div class="c-image">
              <img src={image2}></img>
            </div>
            <p class="info-text">
              Heather does the web-developing with an eye for the front-end.
              Full-stack by day, plant/animal lover, musician and artist by
              night. She enjoys hiking, yoga, knitting and tormenting her
              husband with healthy food and scrabble. www.heatherluttrell.com
            </p>
            <div class="c-image">
              <img src={image3}></img>
            </div>
            <p class="info-text">
              <p class="info-text">
                Stacey Graham is a Software Engineer who lives in Atlanta, GA
                with her family. She loves “ALL THINGS” Tech and also loves
                making jewelry, traveling, and yoga.
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
