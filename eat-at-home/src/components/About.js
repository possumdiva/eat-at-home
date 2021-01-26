import React, { Component } from "react";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import image1 from "./images/Team/Wilcott.jpeg";
import image2 from "./images/Team/Luttrell.jpeg";
import image3 from "./images/Team/Graham.jpeg";
import image from "./images/Team/aboutHeader.jpeg";

function About() {
  const linkStyle = {
    color: 'black',
    textDecoration: 'underline',
    fontSize: 14
  }
  return (
    <div className="main">
      <NavBar />
      <div className="aboutHI">
        <img className="aboutHI-image" src={image}></img>
      </div>
      <div className="about">
        <div>
          <img className="about-image" src={image1}></img>
          <div className="about-text">
            <p>
              Elijah is a full-stack developer living in South Carolina. He has
              also worked as a photographer, prepress operator, and Chinese
              teacher. He loves good food and great films.
            </p><br />
            <p><a href="https://www.elijahwilcott.com" target="_blank" style={linkStyle}>www.elijahwilcott.com</a></p>
          </div>
        </div>

        <div>
          <img className="about-image" src={image2}></img>
          <div className="about-text">
            <p>
              Heather does web-developing with an eye for the front-end.
              Full-stack by day, plant/animal lover, musician and artist by
              night. She enjoys hiking, yoga, knitting and tormenting her
              husband with healthy food and scrabble.
            </p><br />
            <p><a href="http://www.heather-luttrell.surge.sh/" target="_blank" style={linkStyle}>www.heather-luttrell.surge.sh</a></p>
          </div>
        </div>

        <div>
          <img className="about-image" src={image3}></img>
          <div className="about-text">
            <p>
              Stacey is a Software Engineer who lives in Atlanta, GA with
              her family. She loves “ALL THINGS” Tech and also loves making
              jewelry, traveling, and yoga.
            </p>
            <p><a href="https://www.stacey.codes/" target="_blank" style={linkStyle}>www.stacey.codes</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
