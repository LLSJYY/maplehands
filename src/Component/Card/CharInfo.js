import {React,useState} from "react";
import ContextWorld from "../ContextWorld";
import './CharInfo.css'

const CharInfo = () => {
  const [touchStart,setTouchStart] = useState(0);  
  const [touchEnd,setTouchEnd] = useState(0);
  const [isSwipe,setIsSwipe] = useState(null);
  const bookmarkIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYrUR6Nkx5F-u4mvQFHrDKVts6KAGTKFwGA&usqp=CAU"
  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX)
  }
  const handleTouchMove = (event) => {
    
    setTouchEnd(event.targetTouches[0].clientX)
    
  }
    return (
    <div className="slider-wrapper" >
      <ContextWorld.Consumer>{
        ({ char, world }) => {
          const handleTouchEnd = (event) => {
            if(touchEnd-touchStart > 150){
              setIsSwipe((isSwipe < 0 && isSwipe+414));
            }
            if(touchEnd-touchStart < -  150){
              if(isSwipe === -(414 * ((char.length)-1))){
                setIsSwipe(0);
                
            }else {
              setIsSwipe((isSwipe-414));
            }
            }
          }
          // eslint-disable-next-line no-lone-blocks
          {
            return char.map((el, index) => {
              if (world === el.world || world === '전체월드선택') {
                return (
                  <div className="slider-wrapper-container" key={index}  onTouchStart={handleTouchStart}  onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}  style={{transform :`translateX(${isSwipe}px)`}} >

                    <div className="header">
                      <input className="info world" type="image" src={el.img} alt="" />
                      <input className="info bookmark" type="image" src={bookmarkIMG} alt="" />
                    </div>
                    <div className="main">
                      <input className="info character" type="image" src={el.charImg} alt="" />
                      </div>
                    <div className="footer" >
                      <div className="right">
                      <span className="info id">{el.id}</span>
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