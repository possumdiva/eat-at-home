import React from "react";
// import { Link } from 'react-router-dom';
import { NavBar } from './NavBar';
import image1 from "./images/meals/MealPic1.jpeg";
import image2 from "./images/meals/MealPic2.jpeg";
import image3 from "./images/meals/MealPic3.jpeg";
import image4 from "./images/meals/MealPic4.jpeg";
import image5 from "./images/meals/MealPic5.jpeg";
import image6 from "./images/meals/MealPic6.jpeg";
import image7 from "./images/meals/MealPic7.jpeg";
import image8 from "./images/meals/MealPic8.jpeg";
import image9 from "./images/meals/MealPic9.jpeg";
import image10 from "./images/meals/MealPic10.jpeg";
import image11 from "./images/meals/MealPic11.jpeg";
import image12 from "./images/meals/MealPic12.jpeg";


function Meals() {
    return (
      <div classname="main">
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


export default Meals;