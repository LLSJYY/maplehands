import React from "react";
import Hamburger from "./TopSideBtn.js/Hamburger";
import Alert from "./TopSideBtn.js/Alert";
import Title  from "./TopSideBtn.js/Title";
import { MainPageBtn } from "./MainPageBtn";
import WorldChoice from "../section/WorldChoice";

const BackGround = () => {
  return (
    <>
    <header>
    <Hamburger/>
    <Alert/>
    <Title/>
    </header>
    <WorldChoice/>
    <MainPageBtn/>
    </>
  );
}

export default BackGround;