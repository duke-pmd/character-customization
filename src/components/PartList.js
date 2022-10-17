import React from "react";
import PartListItem from "./PartListItem";
export default function PartList({ partName, partTotal, handlePartClick }) {
  const partSquares = [];
  for (let i = 0; i < partTotal; i++) {
    partSquares.push(
      <PartListItem
        key={partName + i}
        partName={partName}
        partTotal={partTotal}
        handlePartClick={handlePartClick}
        index={i}
      />
    );
  }

  return <div className="list">{partSquares}</div>;
}
