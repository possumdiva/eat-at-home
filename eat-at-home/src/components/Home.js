import React from "react";
// import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import image from "./images/Header.jpeg";
import Meals from "./Meals";


function Home() {
    return (
        <div classname="main">
            <NavBar />
            <h1><span>EAT @ HOME</span></h1>
            <div class="header-image" alt="">
                <img src={ image }></img>
                
            </div>
            <div class="feature-divider"></div>
            <hr size="2" width="600px" color="black"></hr>
            <div class="text">
            <p>With so many of us eating at home these days, it can get exhausting trying to keep your meals tasty and exciting.</p> <p> Grocery stores can be overwhelming and sometimes you just don't want to cook...</p><p>We totally understand and are here to help you choose some options that can help with that fatigue!</p> <p> From produce delivery to full meals </p> <p class="bold-text">Eat @ Home</p> <p> provides a comprehensive collection of the best companies online to deliver what you need</p> <p>right to your doorstep!</p>
            </div>
            <div class="feature-divider"></div>
            <hr size="2" width="600px" color="black"></hr>
            <h1><span>Meal Delivery</span></h1>
            
            <Meals />
           

           
        </div >
        
    
    );
}


export default Home;