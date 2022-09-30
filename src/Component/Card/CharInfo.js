import {React,useState} from "react";
import ContextWorld from "../ContextWorld";
import './CharInfo.css'

const CharInfo = (props) => {
  const [touchStart,setTouchStart] = useState(0);  
  const [touchEnd,setTouchEnd] = useState(0);
  const [isSwipe,setIsSwipe] = useState(null);
  const bookmarkIMG = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYrUR6Nkx5F-u4mvQFHrDKVts6KAGTKFwGA&usqp=CAU"
  const displayCard = props.displayCard;
  
  const handleTouchStart = (event) => {
    setTouchStart(event.targetTouches[0].clientX)
  }
  const handleTouchMove = (event) => {
    //help
    setTouchEnd(event.changedTouches[0].clientX)
    
  }
  console.log(touchStart,touchEnd);
    return (
    <div className={`${displayCard ? "slider-wrapper" : "slider-wrapper2"}`} >
      <ContextWorld.Consumer>{
        ({ char, world }) => {
          const handleTouchEnd = (event) => {
            if(touchEnd === 0){
              return;
            }
            if(touchEnd-touchStart > 150){
              setIsSwipe((isSwipe < 0 && isSwipe+408));
            }
            if(touchEnd-touchStart < -  150){
              if(isSwipe === -(408 * ((char.length)-1))){
                setIsSwipe(0);
                
            }else {
              setIsSwipe((isSwipe-408));
            }
            }
            setTouchEnd(0);
          }
          // eslint-disable-next-line no-lone-blocks
          {
            return char.map((el, index) => {
              if (world === el.world || world === '전체 월드 선택') {
                return (
                  <div className="slider-wrapper-container" key={index}  onTouchStart={handleTouchStart}  onTouchEnd={handleTouchEnd} onTouchMove={handleTouchMove}  style={{transform :`translateX(${isSwipe}px)`}} >

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
              } 
            })
          }
        }
      }
      </ContextWorld.Consumer>
    </div>
    )
}

export default CharInfo;  