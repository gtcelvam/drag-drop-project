import React, { useState } from "react";
import { handleDragOver, handleGetDropData } from "../utils/helpers";
import { widgetLibrary } from "../utils/library";

export default function MidArea() {
  const [widgets, setWidgets] = useState([]);

  //functions
  const handleWidgetChange = (widgetName) => {
    setWidgets([...widgets, widgetLibrary[widgetName]]);
  };

  return (
    <div
      className="flex-1 h-full overflow-auto"
      onDrop={(e) => handleGetDropData(e, handleWidgetChange)}
      onDragOver={(e) => handleDragOver(e)}
    >
      {"mid area"}
      {widgets.map((item, i) => {
        return (
          <div key={item.name + " - " + i} style={{ width: "200px" }}>
            {item.component}
          </div>
        );
      })}
    </div>
  );
}
