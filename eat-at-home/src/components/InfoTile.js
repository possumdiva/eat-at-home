import React, { useState, useEffect } from "react";
import StyleTile from "./StyleTile";

export const InfoTile = (props) => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div class="c-image">
      <img
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        src={props.image}
      ></img>
      {isShown && (
        <div class="box-text">I'll appear when you hover over the button.</div>
      )}
    </div>
  );
};
