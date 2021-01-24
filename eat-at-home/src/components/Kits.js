import React from "react";
import { InfoTile } from "./InfoTile";
import { Data } from "./RenderComp";
import image1 from "./images/Kits/KitPic1.jpeg";
import image2 from "./images/Kits/KitPic2.jpeg";
import image3 from "./images/Kits/KitPic3.jpeg";
import image4 from "./images/Kits/KitPic4.jpeg";
import image5 from "./images/Kits/KitPic5.jpeg";
import image6 from "./images/Kits/KitPic6.jpeg";
import image7 from "./images/Kits/KitPic7.jpeg";
import image8 from "./images/Kits/KitPic8.jpeg";
import image9 from "./images/Kits/KitPic9.jpeg";
import image10 from "./images/Kits/KitPic10.jpeg";
import image11 from "./images/Kits/KitPic11.jpeg";
import image12 from "./images/Kits/KitPic12.jpeg";

function Kits() {
  return (
    <div className="main">
      <div className="page-title">
        <h1>Meal Kits</h1>
      </div>
      <div className="row">
        <div className="column">
          <InfoTile
            image={image1}
            ID={Data.Mkits[0].ID}
            BizName={Data.Mkits[0].BizName}
            Options={Data.Mkits[0].Options}
          />
          <InfoTile
            image={image2}
            ID={Data.Mkits[1].ID}
            BizName={Data.Mkits[1].BizName}
            Options={Data.Mkits[1].Options}
          />
          <InfoTile
            image={image3}
            ID={Data.Mkits[2].ID}
            BizName={Data.Mkits[2].BizName}
            Options={Data.Mkits[2].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image4}
            ID={Data.Mkits[3].ID}
            BizName={Data.Mkits[3].BizName}
            Options={Data.Mkits[3].Options}
          />
          <InfoTile
            image={image5}
            ID={Data.Mkits[4].ID}
            BizName={Data.Mkits[4].BizName}
            Options={Data.Mkits[4].Options}
          />
          <InfoTile
            image={image6}
            ID={Data.Mkits[5].ID}
            BizName={Data.Mkits[5].BizName}
            Options={Data.Mkits[5].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image7}
            ID={Data.Mkits[6].ID}
            BizName={Data.Mkits[6].BizName}
            Options={Data.Mkits[6].Options}
          />
          <InfoTile
            image={image8}
            ID={Data.Mkits[7].ID}
            BizName={Data.Mkits[7].BizName}
            Options={Data.Mkits[7].Options}
          />
          <InfoTile
            image={image9}
            ID={Data.Mkits[8].ID}
            BizName={Data.Mkits[8].BizName}
            Options={Data.Mkits[8].Options}
          />
        </div>

        <div className="column">
          <InfoTile
            image={image10}
            ID={Data.Mkits[9].ID}
            BizName={Data.Mkits[9].BizName}
            Options={Data.Mkits[9].Options}
          />
          <InfoTile
            image={image11}
            ID={Data.Mkits[10].ID}
            BizName={Data.Mkits[10].BizName}
            Options={Data.Mkits[10].Options}
          />
          <InfoTile
            image={image12}
            ID={Data.Mkits[11].ID}
            BizName={Data.Mkits[11].BizName}
            Options={Data.Mkits[11].Options}
          />
        </div>
      </div>
    </div>
  );
}

export default Kits;
