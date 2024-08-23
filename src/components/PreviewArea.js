import React from "react";
import CatSprite from "./CatSprite";
import { useSelector } from "react-redux";

export default function PreviewArea() {
  //state values 
  const sliceStyles = useSelector((state) => state.style);

  const catStyles = {
    position : sliceStyles.position,
    left: sliceStyles.left+'px',
    top:sliceStyles.top+'px',
    transformOrigin: "center",
    transition:`${sliceStyles.transition}s ease-in-out`
  }

  console.log("sliceStyles",sliceStyles);

  return (
    <div className="flex-none h-full overflow-y-auto p-2" style={catStyles}>
      <CatSprite />
    </div>
  );
}
