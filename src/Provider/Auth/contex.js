import React from "react";

const AuthContext = React.createContext({
  name: "",
  email: "",
  password: "",
  setName: () => {},
  setEmail: () => {},
  setPassword: () => {},
  registerUser: () => {},
});

export { AuthContext };
