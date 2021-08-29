import React from "react";
import { useHistory } from "react-router-dom";
import useAuthCounteiner from "../../containers/auth";
import { AuthContext } from "./contex";

const AuthProvider = (props) => {
  const { createUser, loginUser } = useAuthCounteiner();
  const [isLogin, setIsLogin] = React.useState(false);
  const [user, setUser] = React.useState({});
  const history = useHistory();

  const registerUser = async ({ name, email, password }) => {
    const res = await createUser(name, email, password);
    if (res.isSuccess) {
      history.push("login");
      alert("Success");
    } else {
      alert(res.message);
    }
  };

  const login = async ({ name, password }) => {
    const res = await loginUser(name, password);
    if (res.isSuccess) {
      console.log({ res });
    } else {
      alert(res.message);
    }

    // if (res && res.loggedIn) {
    //   alert("Success");
    //   setUser({
    //     username: res.username,
    //   });
    // } else {
    //   alert("Fail");
    // }
  };

  const providerValues = {
    isLogin,
    user,
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
