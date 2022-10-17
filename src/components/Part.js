import React from "react";

function Part({ partName, fileNumber, zIndex }) {
  let partURL = `/images/${
    partName.startsWith("clothing") ? `clothes/${partName}` : partName
  }/${fileNumber + 1}.png`;
  return (
    <img
      src={partURL}
      style={{
        zIndex: { zIndex },
        position: "absolute",
        left: "0px",
        top: "0px",
      }}
      alt=""
      width="260"
    ></img>
  );
}

export default Part;
