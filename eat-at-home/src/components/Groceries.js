import React from "react";
// import { Link } from 'react-router-dom';
import { NavBar } from "./NavBar";
import { InfoTile } from "./InfoTile";
import { Data } from "./RenderComp";
import image1 from "./images/Groceries/GrocerPic1.jpeg";
import image2 from "./images/Groceries/GrocerPic2.jpeg";
import image3 from "./images/Groceries/GrocerPic3.jpeg";
import image4 from "./images/Groceries/GrocerPic4.jpeg";
import image5 from "./images/Groceries/GrocerPic5.jpeg";
import image6 from "./images/Groceries/GrocerPic6.jpeg";
import image7 from "./images/Groceries/GrocerPic7.jpeg";

function Groceries() {
  return (
    <div classname="main">
      <div class="page-title">
        <h1>Groceries</h1>
      </div>
      <div class="row">
        <div class="column">
          <InfoTile
            image={image1}
            ID={Data.produce[0].ID}
            BizName={Data.produce[0].BizName}
            Options={Data.produce[0].Options}
          />
          <InfoTile
            image={image2}
            ID={Data.produce[1].ID}
            BizName={Data.produce[1].BizName}
            Options={Data.produce[1].Options}
          />
          <InfoTile
            image={image3}
            ID={Data.produce[2].ID}
            BizName={Data.produce[2].BizName}
            Options={Data.produce[2].Options}
          />
        </div>

        <div class="column">
          <InfoTile
            image={image4}
            ID={Data.produce[3].ID}
            BizName={Data.produce[3].BizName}
            Options={Data.produce[3].Options}
          />
          <InfoTile
            image={image5}
            ID={Data.produce[4].ID}
            BizName={Data.produce[4].BizName}
            Options={Data.produce[4].Options}
          />
          <InfoTile
            image={image6}
            ID={Data.produce[5].ID}
            BizName={Data.produce[5].BizName}
            Options={Data.produce[5].Options}
          />
        </div>

        <div class="column">
          <InfoTile
            image={image7}
            ID={Data.produce[6].ID}
            BizName={Data.produce[6].BizName}
            Options={Data.produce[6].Options}
          />
        </div>
      </div>
    </div>
  );
}

export default Groceries;
