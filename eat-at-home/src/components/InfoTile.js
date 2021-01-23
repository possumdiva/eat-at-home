import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import hover from "./Hover";
import { CompTemp } from "./CompTemp";
export const InfoTile = (props) => {
  const handleClick = (bizID) => {
    // console.log(bizID);
  };
  // console.log(props.Options);
  const [isShown, setIsShown] = useState(false);
  const bizID = props.ID;
  return (
    <div className="c-image">
      <Link
        to={{
          pathname: "/comptemp",
          state: { bizID: bizID },
        }}
      >
        <img
          className="mouse-action"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
          src={props.image}
        ></img>
      </Link>
      {isShown && (
        <div className="box-text" onClick={handleClick(props.ID)}>
          {props.BizName}:{props.Options}
        </div>
      )}
    </div>
  );
};
