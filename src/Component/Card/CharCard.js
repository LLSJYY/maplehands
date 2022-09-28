import React from "react";
import ContextWorld from "../ContextWorld";
import CharInfo from "./CharInfo";
import './scroll.css'
const CharCard = () => {
  const sliderHandler = (event) => {
    console.log(event)
  }
  

  return (
    <div onTouchStart={sliderHandler}>
     <CharInfo/>
     </div>
  )
}

export default CharCard;  