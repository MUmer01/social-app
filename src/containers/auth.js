import Axios from "axios";

const useAuthCounteiner = () => {
  const signup = async (name, email, password) => {
    console.log({ name, email, password });
    const data = await Axios.post("http://localhost:3001/user/register", {
      username: name,
      email,
      password,
    });
    console.log({ data });
  };

  return {
    createUser: signup,
  };
};

export default useAuthCounteiner;
