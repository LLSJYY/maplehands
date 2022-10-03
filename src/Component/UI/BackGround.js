import React, { useState } from "react";
import WorldChoice from "../section/WorldChoice";
import ContextWorld from "../ContextWorld";
import ContextChar from "../ContextChar";
import CharCard from '../Card/CharCard';
import CardFooter from "./CardFooter";
import HeaderNav from "./Header/HeaderNav";

const BackGround = () => {
  const [world,setWorld] = useState('전체 월드 선택');  
  const worldName = (data)=> {
    setWorld(data.name);
    
  }
  console.log(world);
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
  const store = [{
    world: "루나",
    img: 'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif'
  },{
    world: "크로아",
    img: 'https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif'
  }]

  console.log(char);
  return (
    <>
      <ContextWorld.Provider value={{store,char,world}}>
        <HeaderNav/>
        <WorldChoice worldName={worldName} />
        <div>
          <CharCard/>
        </div>
      </ContextWorld.Provider>
    </>
  );
}

export default BackGround;