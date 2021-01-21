import React from "react";

function Hover() {
  function changeBackground(e) {
    e.target.style.background = "red";
  }

  return (
    <div className="Hover">
      <button onMouseOver={changeBackground}>Hover over me!</button>
    </div>
  );
}

export default Hover;
