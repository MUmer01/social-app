import React from "react";
import useAuthCounteiner from "../../containers/auth";
import { AuthContext } from "./contex";

const AuthProvider = (props) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { createUser, loginUser } = useAuthCounteiner();
  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState({});

  const registerUser = async () => {
    const isSuccess = await createUser(name, email, password);
    if (isSuccess) {
      alert("Success");
      setIsLogin(true);
    } else {
      alert("Fail");
    }
  };
  const login = async () => {
    const res = await loginUser(name, password);
    if (res && res.loggedIn) {
      alert("Success");
      setUser({
        username: res.username,
      });
    } else {
      alert("Fail");
    }
  };

  const providerValues = {
    name,
    email,
    password,
    isLogin,
    user,
    setName,
    setEmail,
    setPassword,
    setIsLogin,
    registerUser,
    loginUser: login,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
