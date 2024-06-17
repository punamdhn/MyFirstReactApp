import { useState } from "react";
import "./ColorBox.css";

function randomChoice(colors) {
  const idx = Math.floor(Math.random() * colors.length);
  return colors[idx];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(randomChoice(colors));
  const changeColor = () => {
    setColor(randomChoice(colors));
  };
  return (
    <>
      <div
        className="ColorBox"
        onClick={changeColor}
        style={{ background: color }}
      ></div>
    </>
  );
}
