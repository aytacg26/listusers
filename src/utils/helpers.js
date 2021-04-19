export const validateData = (formData) => {
  const { username, age } = formData;
  let error = { title: '', msg: '' };
  let hasError = true;

  if (username.trim().length > 0 && parseInt(age)) {
    if (parseInt(age) > 0 && parseInt(age) <= 125) {
      const userId = `user-${Math.ceil(Math.random() * 1000)}-${Math.ceil(
        Math.random() * 25000
      )}-${username}`;

      const revisedData = { id: userId, ...formData };

      return { user: revisedData, hasError: false, error };
    } else {
      return {
        user: null,
        hasError,
        error: {
          title: 'Age Error!',
          msg: 'Age must be higher than 0 and less than or equal to 125',
        },
      };
    }
  } else {
    if (username.trim().length === 0 && (!age || !parseInt(age))) {
      error = {
        title: 'Username and age is required',
        msg: 'Please enter a valid username and age',
      };
    } else if (!username || username.trim().length === 0) {
      error = {
        title: 'Username is required',
        msg: 'Please enter a valid username',
      };
    } else if (!age || !parseInt(age)) {
      error = {
        title: 'Age is required',
        msg: 'Please enter a valid age',
      };
    } else {
      error = {
        title: 'Not Valid',
        msg: 'Please enter valid data.',
      };
    }

    return { user: null, hasError, error };
  }
};
