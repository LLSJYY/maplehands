import React from "react";
import ContextWorld from "../ContextWorld";
import './CharInfo.css'
const CharInfo = () => {
  const bookmarkIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYrUR6Nkx5F-u4mvQFHrDKVts6KAGTKFwGA&usqp=CAU"
  const slideHandler = (event) => {
    console.log(event)
  }
  return (
    <div className="slider" >
      <ContextWorld.Consumer>{
        ({ char, world }) => {
          // eslint-disable-next-line no-lone-blocks
          {
            return char.map((el, index) => {
              if (world === el.world || world === '전체월드선택') {
                return (
                  <div className="slider-inner" key={index}  >
                    <div className="header">
                      <input className="info world" type="image" src={el.img} alt="" />
                      <input className="info bookmark" type="image" src={bookmarkIMG} alt="" />
                    </div>
                    <div className="main">
                      <input className="info character" type="image" src={el.charImg} alt="" />
                      </div>
                    <div className="footer" >
                      <div className="right">
                      <span className="info id">leesu</span>
                      <span className="info level">레벨</span>
                      </div>
                      <div className="left">
                      <span className="info class">직업명</span>
                      <span className="info">level</span>
                      </div>
                    </div>
                  </div>)
              } else {
                return <span>Todo</span>
              }
            })
          }
        }
      }
      </ContextWorld.Consumer>
    </div>)
}

export default CharInfo;  