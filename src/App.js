import Login from "./features/login";
import Register from "./features/signup";
import { useAuthContext } from "./hooks/auth";

function App() {
  const { isLogin } = useAuthContext();
  console.log({isLogin})
  return <>{isLogin ? <Login /> : <Register />}</>;
}

export default App;
