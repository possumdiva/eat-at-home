import React from "react";
// import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import image1 from "./images/Groceries/GrocerPic1.jpeg";
import image2 from "./images/Groceries/GrocerPic2.jpeg";
import image3 from "./images/Groceries/GrocerPic3.jpeg";
import image4 from "./images/Groceries/GrocerPic4.jpeg";
import image5 from "./images/Groceries/GrocerPic5.jpeg";
import image6 from "./images/Groceries/GrocerPic6.jpeg";
import image7 from "./images/Groceries/GrocerPic7.jpeg";
import image8 from "./images/Groceries/GrocerPic8.jpeg";
import image9 from "./images/Groceries/GrocerPic9.jpeg";
import image10 from "./images/Groceries/GrocerPic10.jpeg";
import image11 from "./images/Groceries/GrocerPic11.jpeg";
import image12 from "./images/Groceries/GrocerPic12.jpeg";


function Groceries() {
    return (
      <div classname="main">
      <NavBar />
      <h1><span>Groceries Delivery</span></h1>
      <div class="header-image" alt="">
      </div> 
      <div class="row">
  <div class="column">
    <div class="c-image"><img src={ image1 } ></img></div>
    <div class="c-image"><img src={ image2 } ></img></div>
    <div class="c-image"><img src={ image3 } ></img></div>
  </div>
  
  <div class="column">
    <div class="c-image"><img src={ image4 } ></img></div>
    <div class="c-image"><img src={ image5 } ></img></div>
    <div class="c-image"><img src={ image6 } ></img></div>
  
  </div>
  
  <div class="column">
    <div class="c-image"><img src={ image7 } ></img></div>
    <div class="c-image"><img src={ image8 } ></img></div>
    <div class="c-image"><img src={ image9 } ></img></div>
  </div>

  <div class="column">
    <div class="c-image"><img src={ image10 } ></img></div>
    <div class="c-image"><img src={ image11} ></img></div>
    <div class="c-image"><img src={ image12} ></img></div>
    
  </div>
      </div>
      </div> 
        
    );
}


export default Groceries;