import React, { useState } from 'react';
import styles from './UserForm.module.css';
import { validateData } from '../../../utils/helpers';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ username: '', age: '' });
  const { username, age } = formData;

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const { user, hasError, error } = validateData(formData);

    if (!hasError) {
      setFormData({ username: '', age: '' });
    }

    onSubmit({ user, hasError, error });
  };

  return (
    <form className={styles.UserForm} onSubmit={handleFormSubmit}>
      <div className={styles.inputGroup}>
        <label>Username</label>
        <input
          type='text'
          placeholder='Username'
          value={username}
          name='username'
          onChange={handleUserInput}
          autoComplete='off'
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Age</label>
        <input
          type='text'
          placeholder='Age'
          value={age}
          name='age'
          onChange={handleUserInput}
          autoComplete='off'
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
