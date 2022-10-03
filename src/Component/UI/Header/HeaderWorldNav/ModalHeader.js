
import {React,useState} from 'react';
import ReactModal from 'react-modal';
import ContextWorld from '../../../ContextWorld';

const ModalHeader = () => {

  const [isOpen, setIsOpen] = useState(false);

  const modalStyle = {
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
  }


  const handlerOpenModal = () => {
    setIsOpen(!isOpen);
  }
  const handleCloseModal = () => {
    setIsOpen(false);
  }

  return (
    <ReactModal onRequestClose={handleCloseModal} ariaHideApp={false} style={modalStyle} isOpen={isOpen}>
      <ul className="modal-world">월드 선택
        <ContextWorld.Consumer>{
          ({ char, setWorld }) => char.reduce((acc, curr) => {
            if (acc.findIndex(({ world }) => world === curr.world) === -1) {
              acc.push(curr);
            } return acc;
          }, []).map((el, index) => <li id="modal-world-name" key={index} onClick={(e) => { setIsOpen(false); return setWorld(el.world) }}><img id="modal-world-icon" src={el.img} alt="world-icon" /><span id="modal-world-name" >{el.world}</span></li>)}
        </ContextWorld.Consumer>
      </ul>
    </ReactModal>
  )

}

export default ModalHeader;