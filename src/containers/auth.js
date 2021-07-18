import Axios from "axios";

const useAuthCounteiner = () => {
  const signup = async (name, email, password) => {
    try {
      const res = await Axios.post("http://localhost:3001/user/register", {
        username: name,
        email,
        password,
      });
      console.log({ res });
      if (res.status === 200 && res.data.affectedRows > 0) {
        return true;
      }
    } catch (error) {}
    return false;
  };
  const login = async (name, password) => {
    try {
      const res = await Axios.post("http://localhost:3001/user/login", {
        username: name,
        password,
      });
      console.log({ res });
      if (res.status === 200 && res.data) {
        return res.data;
      }
    } catch (error) {}
    return false;
  };

  return {
    createUser: signup,
    loginUser: login,
  };
};

export default useAuthCounteiner;
