import React from 'react';
import styles from './UserItem.module.css';

const UserItem = ({ name, age, onClick }) => {
  const text = parseInt(age) === 1 ? 'year old' : 'years old';

  return (
    <div className={styles.UserItem} onClick={onClick}>
      <span>
        {name} ({age} {text})
      </span>
    </div>
  );
};

export default UserItem;
