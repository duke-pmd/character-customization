import React from "react";

function PartListItem({ partName, index, handlePartClick }) {
  let partURL = `/images/${
    partName.startsWith("clothing") ? `clothes/${partName}` : partName
  }/${index + 1}.png`;
  return (
    <div className="clickable square">
      <img
        src={partURL}
        alt=""
        height={partName !== "clothing3" ? 60 : 120}
        className="img-center"
        style={partName !== "clothing3" ? { top: `50%` } : { top: `-15px` }}
        onClick={() => {
          handlePartClick(partName, index);
        }}
      ></img>
    </div>
  );
}

export default PartListItem;
