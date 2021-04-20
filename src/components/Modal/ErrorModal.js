import React from 'react';
import ReactDOM from 'react-dom';
import GhostDiv from '../GDiv';
import Modal from './Modal';

const ErrorModal = ({ isActive, onClick, message }) => {
  return (
    <GhostDiv>
      {ReactDOM.createPortal(
        <Modal isActive={isActive} onClick={onClick} message={message} />,
        document.getElementById('modal-root')
      )}
    </GhostDiv>
  );
};

export default ErrorModal;
