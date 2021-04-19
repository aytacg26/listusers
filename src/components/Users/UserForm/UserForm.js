import React, { useState, useRef } from 'react';
import styles from './UserForm.module.css';

const UserForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({ username: '', age: '' });
  const { username, age } = formData;
  const ageInput = useRef();
  const usernameInput = useRef();

  const handleUserInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (username.trim().length > 0 && parseInt(age)) {
      if (parseInt(age) > 0 && parseInt(age) <= 125) {
        const userId = `user-${Math.ceil(Math.random() * 1000)}-${Math.ceil(
          Math.random() * 25000
        )}-${username}`;

        const revisedData = { id: userId, ...formData };

        onSubmit({ user: revisedData, hasError: false, error: {} });
        setFormData({ username: '', age: '' });
      } else {
        onSubmit({
          user: null,
          hasError: true,
          error: {
            title: 'Age Error!',
            msg: 'Age must be higher than 0 and less than or equal to 125',
          },
        });
      }
    } else {
      let error = { title: '', msg: '' };

      if (username.trim().length === 0 && (!age || !parseInt(age))) {
        error = {
          title: 'Username and age is required',
          msg: 'Please enter a valid username and age',
        };
      } else if (!username || username.trim().length === 0) {
        console.log('Please enter a username');
        error = {
          title: 'Username is required',
          msg: 'Please enter a valid username',
        };
        usernameInput.current.focus();
      } else if (!age || !parseInt(age)) {
        error = {
          title: 'Age is required',
          msg: 'Please enter a valid age',
        };

        ageInput.current.focus();
      } else {
        error = {
          title: 'Not Valid',
          msg: 'Please enter valid data.',
        };
      }

      onSubmit({
        user: null,
        hasError: true,
        error,
      });
    }
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
          ref={usernameInput}
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
          ref={ageInput}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
