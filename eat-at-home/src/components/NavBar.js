import React, { Component } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/comptemp">Companies</Link>
  </div>
);
