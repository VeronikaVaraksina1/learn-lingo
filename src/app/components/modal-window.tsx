import React, { useEffect } from 'react';
import Modal from 'react-modal';

export interface ModalWindowProps {
  children: React.ReactNode;
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export default function ModalWindow({ children, isOpenModal, onCloseModal }: ModalWindowProps) {
  useEffect(() => {
    Modal.setAppElement('#__next');
  }, []);

  const customStyles = {
    content: {
      maxWidth: '800px',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      padding: '10px',
      borderRadius: '10px',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#fff',
    },
    overlay: {
      backgroundColor: '#151516db',
    },
  };

  return <Modal isOpen={isOpenModal} onRequestClose={onCloseModal}>{children}</Modal>
};