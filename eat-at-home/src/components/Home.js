import React from "react";
// import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import image from "./images/Radishes.jpeg"


function Home() {
    return (
        <div classname="main">
            <NavBar />
        <h2>can I see this?</h2>
            <div class="background-image">
                <img src={ image }></img>
            </div>
        </div >
    
    );
}


export default Home;