import React from "react";
import { InfoTile } from "./InfoTile";
import { Data } from "./RenderComp";
import image1 from "./images/Groceries/GrocerPic1.jpeg";
import image2 from "./images/Groceries/GrocerPic2.jpeg";
import image3 from "./images/Groceries/GrocerPic3.jpeg";
import image4 from "./images/Groceries/GrocerPic4.jpeg";
import image5 from "./images/Groceries/GrocerPic5.jpeg";
import image6 from "./images/Groceries/GrocerPic6.jpeg";
import image7 from "./images/Groceries/GrocerPic7.jpeg";
import image8 from "./images/Groceries/GrocerPic8.jpeg";
import image9 from "./images/Groceries/GrocerPic9.jpeg";

function Groceries() {
  return (
    <div className="main">
      <div className="page-title">
        <h1>Groceries</h1>
      </div>
      <div className="row">
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
    </div>
  );
}

export default Groceries;
