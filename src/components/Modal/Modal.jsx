import './Modal.css'

const Modal = ({ title, children, visible, onClose}) => { 
  return (
    <div className={`overlay ${visible ? 'active' : null}`}>
      <div className='modal-container'>
        <div  className='modal-header'>
          <h2 className='modal-title'>{title}</h2>
          <button 
          className='close-button'
          onClick={onClose}>
            X
          </button>
        </div>
        
        <div className='body'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Modal