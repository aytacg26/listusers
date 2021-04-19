import React from 'react';
import UserItem from '../UserItem/UserItem';
import styles from './UsersList.module.css';

const UsersList = ({ userslist, onDelete }) => {
  if (userslist.length === 0) {
    return <p className={styles.noUser}>No users added</p>;
  }

  return (
    <div className={styles.UsersList}>
      {userslist.map((user, index) => (
        <UserItem
          name={user.username}
          age={user.age}
          key={user.id}
          onClick={() => onDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UsersList;
