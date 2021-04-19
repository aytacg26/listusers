import React from 'react';
import styles from './Backdrop.module.css';
import PropTypes from 'prop-types';

const Backdrop = ({ onClick }) => {
  return <div className={styles.Backdrop} onClick={onClick}></div>;
};

Backdrop.propTypes = {
  onClick: PropTypes.func,
};

export default Backdrop;
