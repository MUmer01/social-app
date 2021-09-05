import React from "react";
import { useHistory } from "react-router-dom";
import useAuthCounteiner from "../../containers/auth";
import { AuthContext } from "./contex";
import { setLocalStorage, getLocalStorage } from "../../common/utils";
import { localStorageKys } from "../../common/constant";

const AuthProvider = (props) => {
  const { createUser, loginUser } = useAuthCounteiner();
  const [isLogin, setIsLogin] = React.useState(false);
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState({});
  const history = useHistory();

  // history.listen((location, action) => {
  //   console.log(location.pathname);
  // });

  const registerUser = async ({ name, email, password }) => {
    const res = await createUser(name, email, password);
    if (res.isSuccess) {
      history.push("login");
    }
    alert(res.message);
  };

  const login = async ({ name, password }) => {
    const res = await loginUser(name, password);
    if (res.isSuccess) {
      console.log({ data: res.data });
      setToken(res.data.token);
      setUser(res.data.user);
      // history.push("home");
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

  React.useEffect(() => {
    const u = getLocalStorage(localStorageKys.USER);
    const t = getLocalStorage(localStorageKys.AUTH_TOKEN);
    if (u && t) {
      setUser(u);
      setToken(t);
    }
  }, []);

  React.useEffect(() => {
    if (user?.id) {
      setLocalStorage(localStorageKys.USER, user, 24);
    }
  }, [user]);

  React.useEffect(() => {
    if (token) {
      setLocalStorage(localStorageKys.AUTH_TOKEN, token, 24);
    }
  }, [token]);

  const providerValues = {
    isLogin,
    user,
    token,
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
