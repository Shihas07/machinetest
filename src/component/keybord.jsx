import React, { useState } from "react";
import "./keybord.css";

export default function Keybord() {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const alphabets = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const qwertyKeyboard = [
    [
      "`",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "-",
      "=",
      "Backspace",
    ],
    ["Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\"],
    [
      "CapsLock",
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      ";",
      "'",
      "Enter",
    ],
    ["Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "Shift"],
    [
      "Control",
      "Meta",
      "Alt",
      "Space",
      "Alt",
      "Meta",
      "ContextMenu",
      "Control",
    ],
  ];

  const [Number, setNumber] = useState("");
  const [show, setshow] = useState([]);

  console.log(show);

  const Clickaplha = (char) => {
   
    if (char === "Backspace") {
      setNumber((prev) => prev.slice(0,-1));
    }
   else   if(char === "Space"){
      setNumber((prev)=>prev+" ")
    }
    else if(char==="Enter"){
      setshow([...show,Number])
       setNumber("")
    }
   
  
    else{
      setNumber((prev) => (prev + char));
    }

  };

  return (
    <div>
      <h1>React Keyboard</h1>
      <div className="keyboard">
        <input type="text" value={Number} />
        <div className="display"><p>{show}</p></div>
        <div className="keyboard-keys">
          {qwertyKeyboard.flat().map((char, index) => (
            <button
              key={index}
              onClick={() => {
                Clickaplha(char);
              }}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
