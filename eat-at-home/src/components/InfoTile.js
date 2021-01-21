import React, { useState, useEffect } from "react";
import StyleTile from "./StyleTile";

export const InfoTile = (props) => {
  const handleClick = (bizID) => {
    console.log(bizID);
  };
  // console.log(props.Options);
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="c-image">
      <img
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        src={props.image}
      ></img>
      {isShown && (
        <div className="box-text" onClick={handleClick(props.ID)}>
          {props.BizName}:{props.Options}
        </div>
      )}
    </div>
  );
};
