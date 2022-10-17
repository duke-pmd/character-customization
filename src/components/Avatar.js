import React from "react";
import Part from "./Part";

export default function Avatar({ avatar, totalParts }) {
  return (
    <div className="avatar">
      {Object.entries(avatar).map(([key, value], index) => (
        <Part
          key={key + value}
          partName={key}
          fileNumber={value}
          zIndex={totalParts[`${key}`][2]}
        />
      ))}
    </div>
  );
}
