import { regUserName, regEmail } from "./constant";

export const validateUserName = (name) => {
  const value = typeof name === "string" ? name.trim() : "";
  if (!value) {
    return "Name is required";
  } else if (value.length < 3) {
    return "Name should atleast be 3 chracters";
  } else if (!regUserName.test(value)) {
    return "Name should only contains alphabets";
  }
  return "";
};

export const validateEmail = (email) => {
  const value = typeof email === "string" ? email.trim() : "";
  if (!value) {
    return "Email is required";
  } else if (!regEmail.test(value)) {
    return "Please Enter valid Email";
  }
  return "";
};

export const validatePassword = (pass) => {
  const value = typeof pass === "string" ? pass.trim() : "";
  if (!value) {
    return "Password is required";
  } else if (value.length < 6) {
    return "Password should atleast be 6 chracters";
  }
  return "";
};
