import React, { useState } from "react";
import "./App.css";
import "./components/Avatar.js";
import Avatar from "./components/Avatar.js";
import PartListSection from "./components/PartListSection";

function App() {
  // function to generate random number within range of min and max
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // declare number of parts, title names, z-indexes
  const totalParts = {
    body: [17, "Body", 0],
    eyes: [17, "Eyes", 1],
    hair: [73, "Hair", 6],
    mouths: [24, "Mouths", 4],
    eyebrows: [15, "Eyebrows", 4],
    hats: [28, "Hats", 5],
    glasses: [17, "Glasses", 13],
    clothing1: [5, "Clothing (L1)", 2],
    clothing2: [5, "Clothing (L2)", 3],
    clothing3: [9, "Clothing (L3)", 4],
    noses: [1, "Noses", 4],
  };

  // initilize a random avatar when app starts or restarts
  const randomizeAvatar = () => {
    const randomNumberArray = [];
    const partArrays = Object.keys(totalParts);
    Object.entries(totalParts).forEach(([key, value]) => {
      const randomPartNumber = getRandomInt(0, value[0]);
      randomNumberArray.push(randomPartNumber);
    });
    const randomAvatar = Object.assign(
      ...partArrays.map((part, i) => ({ [part]: randomNumberArray[i] }))
    );
    return randomAvatar;
  };

  const [avatar, setAvatar] = useState(randomizeAvatar());

  const handlePartClick = (partName, index) => {
    const newAvatar = { ...avatar, [`${partName}`]: index };
    setAvatar(newAvatar);
  };
  const handleRandomize = () => {
    setAvatar(randomizeAvatar());
  };

  return (
    <>
      <div className="App">
        <div className="title">CHARACTER</div>
        <div className="subtitle">🛠️CUSTOMIZATION🛠️</div>
        <div className="divider"></div>
        <div className={"avatar-group gap-30"}>
          <div className="avatar-column">
            <div className="avatar-wrapper">
              <Avatar avatar={avatar} totalParts={totalParts} />
              <div className="text-center">
                <button className="button" onClick={handleRandomize}>
                  Randomize!
                </button>
              </div>
            </div>
          </div>
          <PartListSection
            totalParts={totalParts}
            handlePartClick={handlePartClick}
          ></PartListSection>
        </div>
      </div>
    </>
  );
}

export default App;
