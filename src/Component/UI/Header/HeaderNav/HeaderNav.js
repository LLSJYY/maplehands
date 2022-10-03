import React from "react";
import './HeaderNav.css'
const HeaderNav = () => {
  return (
    <div className="header-nav">
      <img id="nav-hamburger-menu-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/440px-Hamburger_icon.svg.png" alt="hamburger" />
      <span id="nav-logo">maplehands</span>
      <img id="nav-alertr-menu-icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXghVNwSSC6J79rJq1YTkmNs2_bGEMTZRd3FyYMxbXLWBAHQLRAAe63ram0ha1Ev2GLm8&usqp=CAU" alt="alert" />
    </div>
  )
}

export default HeaderNav;