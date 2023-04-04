  import { useState } from 'react';
  import Modal from '@/components/Modal/Modal';

export function Acciones({onOpenModal, page, children, onSearch}) {

  const [showModal, setShowModal] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');

  const openModal = () => {
    setShowModal(true);
  }

  const closeModal = () => {
    setShowModal(false);
  }
  
  const handleSearch = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);
  }

  return (
    <div className="w-full h-12  bg-red-500 flex justify-center items-center justify-items-center ">
        <div className="w-10/12 h-full">
            <input type="text"  value={searchTerm} onChange={handleSearch}  placeholder="Buscar.." className="w-full h-full border-t border-b focus:outline-none border-gray-800 px-4 py-2" />
        </div>
        <div onClick={openModal} className= "w-1/3 h-full bg-green-500 hover:bg-green-800 hover:transition-colors text-white flex justify-center  border-t border-b border-l cursor-pointer border-gray-800 items-center justify-items-center">
            <button onClick={onOpenModal}>
                { page }
            </button>
        </div>
        <Modal isVisible={showModal} onClose={closeModal}>
          {children}
        </Modal>
    </div>
  )
}
