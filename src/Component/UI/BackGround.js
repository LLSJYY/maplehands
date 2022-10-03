import React, { useEffect, useState } from "react";
import WorldChoice from "./Header/HeaderWorldNav/WorldChoice";
import ContextWorld from "../ContextWorld";
import CharCard from '../Card/CharCard';
import Header from "./Header/Header.js";

const BackGround = () => {
  const [world,setWorld] = useState({
    id:'전체 월드 선택',
    img:"https://cdn.maple.gg/images/bigpidakgg-style/ico-maple.svg",
  });  
  
  const char = [{ 
    world: "루나",
    img:'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif',
    id: "leesu",
    lv: '124',
    charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
    bookmark : false,
     },{ 
      world: "크로아",
      img:'https://cdn.maple.gg/images/maplestory/world/ico_world_croa.gif',
      id: "크로아",
      lv: '124',
      charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
      bookmark : false,  
    },{ 
        world: "스카니아",
        img:'https://cdn.maple.gg/images/maplestory/world/ico_world_scania.gif',
        id: "스카니아",
        lv: '124',
        charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
        bookmark : false,  
      },{ 
          world: "엘리시움",
          img:'https://cdn.maple.gg/images/maplestory/world/ico_world_elysium.gif',
          id: "엘리시움",
          lv: '124',
          charImg:"https://avatar.maplestory.nexon.com/Character/HHMFCEFBNCHFBJILMGGJNPLMDPAALJDPKKGAEOAKCMLBLLOCFGDOLDFOMALJGEFBOPBMDECKHPKFCIDICHDLNBLIIBFFPOADHCLECBELEKEPEMFCOHIPKPHFNPKLJDFPMKCIJNGFDIKJKBLOJILOFHJAHKOMDCBBDJGPLPNINDEEJNEFEPNPJKKIMHMCPDDJIBGACDCIHKBPOIBPMBCJCAFJCMPNPOPHIJFPJKKBPDHMFKKBHIPKEMIPMBHDCHJG.png",
          bookmark : false,  
        }]
        console.log(world);
  return (
    <>
      <ContextWorld.Provider value={{char,world,setWorld}}>
        <Header/>        
        <CharCard/>
        </ContextWorld.Provider>
    </>
  );
}

export default BackGround;