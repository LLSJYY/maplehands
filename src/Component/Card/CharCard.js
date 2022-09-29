import {React,useState} from "react";
import ContextWorld from "../ContextWorld";
import CharInfo from "./CharInfo";
import MainPageBtn from "../UI/MainPageBtn";
import CardFooter from "../UI/CardFooter";
import './scroll.css'

const CharCard = () => {
  const [displayCard,setDisplayCard] = useState(true);
  const cardHandler = (status) => {
    setDisplayCard(status);
  }  

  return (
    <div className="slider-container" >
    <CharInfo displayCard={displayCard}/>
     { displayCard ? <CardFooter/> : ""}

     <MainPageBtn cardHandler={cardHandler} displayCard={displayCard}/>
     </div>
  )
}

export default CharCard;  