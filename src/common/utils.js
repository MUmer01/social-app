import { regUserName, regEmail } from './constant';

export const validateUserName = name => {
  const value = typeof name === 'string' ? name.trim() : '';
  if (!value) {
    return 'Name is required';
  }
  if (value.length < 3) {
    return 'Name should atleast be 3 chracters';
  }
  if (!regUserName.test(value)) {
    return 'Name should only contains alphabets or numbers';
  }
  return '';
};

export const validateEmail = email => {
  const value = typeof email === 'string' ? email.trim() : '';
  if (!value) {
    return 'Email is required';
  } else if (!regEmail.test(value)) {
    return 'Please Enter valid Email';
  }
  return '';
};

export const validatePassword = pass => {
  const value = typeof pass === 'string' ? pass.trim() : '';
  if (!value) {
    return 'Password is required';
  } else if (value.length < 6) {
    return 'Password should atleast be 6 chracters';
  }
  return '';
};

export const setLocalStorage = (key, data, hours) => {
  try {
    if (key && data) {
      const modify = {
        data,
        time: hours ? new Date().getTime() + hours * 60 * 60 * 1000 : null,
      };
      localStorage.setItem(key, JSON.stringify(modify));
    }
  } catch (e) {
    console.error({ e });
  }
};
export const getLocalStorage = key => {
  try {
    if (key) {
      const data = localStorage.getItem(key);
      if (data) {
        const modify = JSON.parse(data);
        if (modify.time && new Date(modify.time) <= new Date()) {
          localStorage.removeItem(key);
          throw new Error('Data Expired');
        }
        return modify.data;
      }
    }
  } catch (e) {
    console.error({ e });
  }
};
