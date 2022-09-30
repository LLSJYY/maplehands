import { React, useState } from "react"
import ReactModal from 'react-modal';
import ContextWorld from "../ContextWorld";

const WolrdChoice = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [worldName, setWorldName] = useState({name:"전체 월드 선택",img:"https://cdn.maple.gg/images/bigpidakgg-style/ico-maple.svg"});
 
  const spanStyle = {
    fontSize: '0.75rem',
    borderRadius: '30px',
    border: '1px solid black',
    padding: '0.5rem 1rem',
    marginLeft: '2rem',
    backgroundColor: 'fff',
    display:'inline-flex',
  };
  /* world Data ㅜㅜ*/
  const world = [{
    name:'전체 월드 선택',
    img:"https://cdn.maple.gg/images/bigpidakgg-style/ico-maple.svg",
  },{
    name:'스카니아',
    img:"https://cdn.maple.gg/images/maplestory/world/ico_world_scania.gif",
  },{
    name:'크로아',
    img:"https://cdn.maple.gg/images/maplestory/world/ico_world_croa.gif",
  },{
    name:'루나',
    img:"https://cdn.maple.gg/images/maplestory/world/ico_world_luna.gif",
  },{
    name:'엘리시움',
    img:"https://cdn.maple.gg/images/maplestory/world/ico_world_elysium.gif",
  },];

  const updateWorldName = (data) => {
    setWorldName({name:data.name,img:data.img});
    setIsOpen(false);
  }
  
  const handler = () => {
    setIsOpen(!isOpen);
  }
  const handleCloseModal = () => {
    setIsOpen(false);

  }
  props.worldName(worldName);
  return (
    <>
      <div style={spanStyle} onClick={handler}><input type="image" src={`${worldName.img}`} style={{paddingRight:"0.5rem"}} alt="" /><span>{` ${worldName.name}`}</span></div>
      <ReactModal onRequestClose={handleCloseModal} ariaHideApp={false} style={{
        overlay: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          position: 'absolute',
          top: '15rem',
          left: '2rem',
          right: '2rem',
          bottom: '15rem',
          border: '1px solid #ccc',
          background: '#fff',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          borderRadius: '4px',
          outline : 'none',
          padding: '20px'
        }
      }} isOpen={isOpen}
      ><ul style={{marginBottom:"1rem"}}>월드 선택
          <ContextWorld.Consumer>{
          ({char}) => char.reduce((acc, curr) =>  { if(acc.findIndex(({world}) => world === curr.world)=== -1){acc.push(curr);} return acc;},[]).map((el,index) => <li  style={{listStyle:"none", marginTop:"0.5rem"}}key ={index} onClick={(e)=> updateWorldName({img:el.img,name:el.world})}><input type="image" src={el.img} alt="world-icon"/><span>{el.world}</span></li> )}
          </ContextWorld.Consumer>
        </ul>
      </ReactModal>
    </>



  )
}
export default WolrdChoice;
// store.filter((el)=><li>{el}</li>