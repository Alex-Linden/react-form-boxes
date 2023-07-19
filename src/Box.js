import React from "react";

/**
 * props:
 * - height
 * - width
 * - backgroundColor
 * - removeBox (callback function)
TODO: This component should display a div with a background color, width, and height
based on the props passed to it.

*/

function Box({ height, width, backgroundColor, removeBox }) {

  return (
    <div className="Box">
      <div style={{
        height: height + "px",
        width: width + "px",
        backgroundColor
      }}></div>
      <button onClick={removeBox}>X</button>
    </div>
  );
}

export default Box;