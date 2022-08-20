import './Modal.css'

const Modal = ({ title, children, visible, onClose, message}) => { 
  return (
    <div className={`modal-overlay ${visible ? 'active' : null}`}>
      <div className='modal-container'>
        <div  className='modal-header'>
          <h2 className='modal-title'>{title}</h2>
          <button 
          className='close-button'
          onClick={onClose}>
            X
          </button>
        </div>
        
        <div className='modal-body'>
          {
            title === 'Error' || title === 'Éxito'?
              <span className='error-message'>{message}</span>
            :
            children
          }
        </div>
      </div>
    </div>
  )
}

export default Modal