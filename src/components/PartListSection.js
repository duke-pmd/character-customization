import React from "react";
import PartList from "./PartList";

export default function PartListSection({ totalParts, handlePartClick }) {
  return (
    <div className="list-column">
      {Object.entries(totalParts)
        .filter(([key, value]) => key !== "noses")
        .map(([key, value]) => (
          <div className="list-section" key={key}>
            <h2>{value[1]}</h2>
            <PartList
              partName={key}
              partTotal={value[0]}
              handlePartClick={handlePartClick}
            />
          </div>
        ))}
    </div>
  );
}
