import React from 'react';
import styles from './UserItem.module.css';
import PropTypes from 'prop-types';
import GhostDiv from '../../GDiv';

const UserItem = ({ name, age, onClick }) => {
  const text = parseInt(age) === 1 ? 'year old' : 'years old';

  return (
    <GhostDiv>
      <div className={styles.UserItem} onClick={onClick}>
        <span>
          {name} ({age} {text})
        </span>
      </div>
    </GhostDiv>
  );
};

UserItem.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default UserItem;
