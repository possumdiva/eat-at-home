import React, { Component }from "react";
import { Link } from 'react-router-dom';

export const NavBar = () => (
  <div className="navbar">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/favorites">Favorites</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/food">Food</Link>
   
  </div>
)