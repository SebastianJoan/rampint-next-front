import React from 'react'

const Modal = ({isVisible, onClose, children  }) => {
  
  if( !isVisible )return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"> 
      <div className='w-[600px]'>
        <div className='bg-white p-2 rounded'>
          <div className='w-full h-auto bg-transparent flex justify-end'>
            <button onClick={ () => onClose() } className="px-4 py-2 bg-red-500 rounded-md text-white hover:bg-red-800">
              Cerrar
            </button>
          </div>
          {React.cloneElement(children, { onClose })}
        </div>
      </div>
    </div>
  )
}

export default Modal