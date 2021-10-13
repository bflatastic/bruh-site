import React from "react";
import { Chrono } from "react-chrono";

function Timeline() {
  const items = [
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
    {
      title: "May 1940",
      cardTitle: "Dunkirk",
      cardSubtitle:
        "Men of the British Expeditionary Force (BEF) wade out to..",
      cardDetailedText:
        "Men of the British Expeditionary Force (BEF) wade out to..",
    },
  ];
  return (
    <div>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING"
        hideControls="true"
        disableNavOnKey="true"
        theme={{
          primary: "white",
          secondary: "black",
        }}
      />
    </div>
  );
}

export default Timeline;
