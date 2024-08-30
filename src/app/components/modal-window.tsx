import React, { useEffect } from 'react';
import Modal from 'react-modal';

export interface ModalWindowProps {
  children: React.ReactNode;
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export default function ModalWindow({ children, isOpenModal, onCloseModal }: ModalWindowProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const appElement = document.querySelector('#__next');
      if (appElement) {
        Modal.setAppElement(appElement as HTMLElement);
      }
    }
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
      backgroundColor: 'rgba(18, 20, 23, 0.7)',
    },
  };

  return <Modal isOpen={isOpenModal} onRequestClose={onCloseModal} style={customStyles}>{children}</Modal>
};