import React, { useState } from "react";
import "./servey.css";

export default function Servey() {
  const [data, setdata] = useState({
    name: "",
    color: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  console.log(data.name);

  return (
    <div className="parent">
      <div className="servey">
        <form action="">
          <h1>what about you</h1>
          <h4>1 What is you name?</h4>
          <input type="text" name="name" onChange={handleChange} />
          <br />
          <h4>2 which is your favorate color ?</h4>
          <input type="radio" name="" id="" />
          <span>blue</span>
          <input type="radio" name="" id="" />
          <span>red</span>
          <br />
          <input type="radio" name="" id="" />
          <span>green</span>
          <input type="radio" name="" id="" />
          <span>other</span>
          <br />
          <br />
          <input type="button" value="submit" />
        </form>
      </div>
    </div>
  );
}
