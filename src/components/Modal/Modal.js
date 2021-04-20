import React from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';
import GhostDiv from '../GDiv'; //Same as Fragment, no need to create this wrapper, Fragment should be used.

const Modal = ({ isActive, onClick, message }) => {
  const modalClass = `${styles.Modal} ${isActive && styles.active}`;
  const modalMessage =
    message !== null && message !== undefined
      ? message
      : { title: 'Modal Title', msg: 'Modal Message' };

  const { title, msg } = modalMessage;

  return (
    <GhostDiv>
      <div className={modalClass}>
        {isActive && (
          <GhostDiv>
            <div className={styles.ModalTitle}>{title}</div>
            <div className={styles.ModalMessage}>{msg}</div>
            <div className={styles.ModalButtonArea}>
              <button onClick={onClick}>Close</button>
            </div>
          </GhostDiv>
        )}
      </div>
      {isActive && <Backdrop onClick={onClick} />}
    </GhostDiv>
  );
};

Modal.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  message: PropTypes.object.isRequired,
};

export default Modal;
