import React, { Fragment } from 'react';
import Backdrop from './Backdrop';
import styles from './Modal.module.css';

const Modal = ({ isActive, onClick, message }) => {
  const modalClass = `${styles.Modal} ${isActive && styles.active}`;
  const modalMessage =
    message !== null && message !== undefined
      ? message
      : { title: 'Modal Title', msg: 'Modal Message' };

  const { title, msg } = modalMessage;

  return (
    <Fragment>
      <div className={modalClass}>
        <div className={styles.ModalTitle}>{title}</div>
        <div className={styles.ModalMessage}>{msg}</div>
        <div className={styles.ModalButtonArea}>
          <button onClick={onClick}>Close</button>
        </div>
      </div>
      {isActive && <Backdrop onClick={onClick} />}
    </Fragment>
  );
};

export default Modal;
