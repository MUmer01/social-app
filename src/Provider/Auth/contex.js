import React from "react";

const AuthContext = React.createContext({
  isLogin: false,
  user: {},
  token: "",
  registerUser: () => {},
  setIsLogin: () => {},
  loginUser: () => {},
});

export { AuthContext };
