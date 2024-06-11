import React from "react";
import { useState } from "react";
import "./color.css"

function Colordiv() {
  const[color,setColor]=useState("")
  const[colors,setColors]=useState("blue")


  const colorAdd=()=>{
    if(color==""){
      setColor("red")
    }
    else if(color=="red"){
      setColor('blue')
    }
    else if(color=="blue"){
      setColor("")
    }
  }

  const colorDecrese=()=>{
    if(colors==="blue"){
      setColors("red")
    }
    else if(colors==="red"){
      setColors("")
    }
    else if(colors===""){
      setColors("blue")
    }
  }

  return (
    <div className="parent">
      
      <div className="left" style={{backgroundColor:color}} onClick={colorAdd}>1</div>
      <div className="right" style={{backgroundColor:colors}} onClick={colorDecrese}>2</div>
    </div>
  );
}

export default Colordiv;
