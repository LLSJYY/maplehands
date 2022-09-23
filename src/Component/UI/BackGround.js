import React from "react";
import Hamburger from "./TopSideBtn.js/Hamburger";
import Alert from "./TopSideBtn.js/Alert";
import Title  from "./TopSideBtn.js/Title";
import { MainPageBtn } from "./MainPageBtn";
const BackGround = () => {
  return (
    <>
    <header>
    <Hamburger/>
    <Alert/>
    <Title/>
    </header>
    <section1/>
    <MainPageBtn/>
    </>
  );
}

export default BackGround;