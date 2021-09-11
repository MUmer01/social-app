import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Login from '../features/login';
import Register from '../features/signup';
import Home from '../features/home';
import { useAuthContext } from '../hooks/auth';
import { unAuthorizedRoutes } from '../common/constant';

const SwitchComp = props => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const { token } = useAuthContext();
  const history = useHistory();
  const location = useLocation();

  React.useEffect(() => {
    const isRouteUnAuth = unAuthorizedRoutes.includes(location.pathname);
    if (isRouteUnAuth && token) {
      history.replace('home');
      setIsAuthenticated(true);
    } else if (!isRouteUnAuth && !token) {
      history.replace('login');
      setIsAuthenticated(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, Math.ceil(Math.random() * 1000) + 500);
  }, [location, token]);

  return isLoading ? (
    <Switch>
      <Route path="/">
        <div>
          <h1>Loading...</h1>
        </div>
      </Route>
    </Switch>
  ) : isAuthenticated ? (
    <AuthRoutes />
  ) : (
    <UnAuthRoutes />
  );
};

const UnAuthRoutes = () => (
  <Switch>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
    <Redirect exact from="/" to="/login" />
  </Switch>
);

const AuthRoutes = () => (
  <Switch>
    <Route path="/home">
      <Home />
    </Route>
    <Redirect exact from="/" to="/home" />
  </Switch>
);

export default SwitchComp;
