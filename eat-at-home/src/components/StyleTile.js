import React, { useState, useEffect } from "react";
import "./StyleTile.js";

function StyleTile() {
  const [isShown, setIsShown] = useState(false);
  useEffect(() => {
  }, [isShown]);
  return (
    <div
      className="App"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {/* <img>Hover over me!</img> */}
      {isShown && <div>I'll appear when you hover over the button.</div>}
    </div>
  );
}

export default StyleTile;
