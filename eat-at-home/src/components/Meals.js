import React from "react";
import { InfoTile } from "./InfoTile";
import { Data } from "./RenderComp";
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
      <div className="page-title">
        <h1>Meals</h1>
      </div>
      <div class="row">
        <div class="column">
          <InfoTile
            className="c-image"
            image={image1}
            ID={Data.Meals[0].ID}
            BizName={Data.Meals[0].BizName}
            Options={Data.Meals[0].Options}
          />
          <InfoTile
            image={image2}
            ID={Data.Meals[1].ID}
            BizName={Data.Meals[1].BizName}
            Options={Data.Meals[1].Options}
          />
          <InfoTile
            image={image3}
            ID={Data.Meals[2].ID}
            BizName={Data.Meals[2].BizName}
            Options={Data.Meals[2].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image4}
            ID={Data.Meals[3].ID}
            BizName={Data.Meals[3].BizName}
            Options={Data.Meals[3].Options}
          />
          <InfoTile
            image={image5}
            ID={Data.Meals[4].ID}
            BizName={Data.Meals[4].BizName}
            Options={Data.Meals[4].Options}
          />
          <InfoTile
            image={image6}
            ID={Data.Meals[5].ID}
            BizName={Data.Meals[5].BizName}
            Options={Data.Meals[5].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image7}
            ID={Data.Meals[6].ID}
            BizName={Data.Meals[6].BizName}
            Options={Data.Meals[6].Options}
          />
          <InfoTile
            image={image8}
            ID={Data.Meals[7].ID}
            BizName={Data.Meals[7].BizName}
            Options={Data.Meals[7].Options}
          />
          <InfoTile
            image={image9}
            ID={Data.Meals[8].ID}
            BizName={Data.Meals[8].BizName}
            Options={Data.Meals[8].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image10}
            ID={Data.Meals[9].ID}
            BizName={Data.Meals[9].BizName}
            Options={Data.Meals[9].Options}
          />
          <InfoTile
            image={image11}
            ID={Data.Meals[10].ID}
            BizName={Data.Meals[10].BizName}
            Options={Data.Meals[10].Options}
          />
          <InfoTile
            image={image12}
            ID={Data.Meals[11].ID}
            BizName={Data.Meals[11].BizName}
            Options={Data.Meals[11].Options}
          />
        </div>
      </div>
    </div>
  );
}

export default Meals;
