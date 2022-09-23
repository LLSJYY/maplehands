import { React, useState } from "react"
import ReactModal from 'react-modal';


const WolrdChoice = () => {
  const [isOpen, setIsOpen] = useState(false);
  const spanStyle = {
    fontSize: '0.75rem',
    borderRadius: '30px',
    border: '1px solid black',
    padding: '0.5rem 1rem',
    margin: '2rem',
    backgroundColor: 'fff',
  }
  const handler = () => {
    setIsOpen(!isOpen);
  }
  const handleCloseModal = () => {
    setIsOpen(false);

  }
  return (
    <>
      <span onClick={handler} style={spanStyle}> ✓ 전체 월드 선택 </span>
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
          outline: 'none',
          padding: '20px'
        }
      }} isOpen={isOpen}
      >

      </ReactModal>
    </>

  )
}
export default WolrdChoice;
