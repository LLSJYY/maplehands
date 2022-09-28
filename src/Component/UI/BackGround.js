import React, { useState } from "react";
import Hamburger from "./TopSideBtn.js/Hamburger";
import Alert from "./TopSideBtn.js/Alert";
import Title from "./TopSideBtn.js/Title";
import { MainPageBtn } from "./MainPageBtn";
import WorldChoice from "../section/WorldChoice";
import ContextWorld from "../ContextWorld";
import ContextChar from "../ContextChar";
import CharCard from '../Card/CharCard';

const BackGround = () => {
  const [world,setWorld] = useState('전체월드선택');
  const setWorldFn = (data) => {
    setWorld(data);
  }
  const char = [{ 
    world: "루나",
    img:'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif',
    id: "leesu",
    lv: '124',
    charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
     },{ 
      world: "루나",
      img:'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif',
      id: "123",
      lv: '124',
      charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
       },{ 
        world: "루나",
        img:'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif',
        id: "111",
        lv: '124',
        charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
         },{ 
          world: "루나",
          img:'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif',
          id: "aisd",
          lv: '124',
          charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
           }]
  const store = [{
    world: "루나",
    img: 'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif'
  },{
    world: "크로아",
    img: 'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif'
  }]

  return (
    <>
      <ContextWorld.Provider value={{store,char,world}}>
        <header>
          <Hamburger />
          <Alert />
          <Title />
        </header>
        <WorldChoice setWorld={setWorldFn} />
        <div>
          <CharCard/>
        </div>
        <MainPageBtn />
      </ContextWorld.Provider>
    </>
  );
}

export default BackGround;