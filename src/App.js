import Register from "./features/signup";
import AuthProvider from './Provider/Auth'

function App() {
  return (
    <AuthProvider>
      <div>
        <Register />
      </div>
    </AuthProvider>
  );
}

export default App;
