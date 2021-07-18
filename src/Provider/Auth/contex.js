import React from "react";

const AuthContext = React.createContext({
  name: "",
  email: "",
  password: "",
  isLogin: false,
  user: {},
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  registerUser: () => {},
  setIsLogin: () => {},
  loginUser: () => {},
});

export { AuthContext };
