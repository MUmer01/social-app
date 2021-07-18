import Register from "./features/signup";
import AuthProvider from "./Provider/Auth";

function App() {
  return (
    <AuthProvider>
      <Register />
    </AuthProvider>
  );
}

export default App;
