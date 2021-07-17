import React from "react";
import useAuthCounteiner from "../../containers/auth";
import { AuthContext } from "./contex";

const AuthProvider = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { createUser } = useAuthCounteiner();

  const registerUser = () => {
    // Validation
    // If Pass
    // Call container API Function
    createUser();
  };

  const providerValues = {
    name,
    email,
    password,
    setName,
    setEmail,
    setPassword,
    registerUser,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
