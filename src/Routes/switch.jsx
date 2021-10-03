/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from 'react-router-dom';
import Login from '../features/login';
import Register from '../features/signup';
import { localStorageKeys, unAuthorizedRoutes } from '../common/constant';
import { AuthRoutes } from './AuthRoutes';
import { useAuthContext } from '../hooks/auth';
import { getLocalStorage } from '../common/utils';

const SwitchComp = props => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const { token } = useAuthContext();
  const history = useHistory();
  const location = useLocation();
  const localStorageToken = getLocalStorage(localStorageKeys.AUTH_TOKEN);

  React.useEffect(() => {
    const isRouteUnAuth = unAuthorizedRoutes.includes(location.pathname);
    if (token) {
      if (isRouteUnAuth) {
        history.replace('home');
      }
      setIsAuthenticated(true);
    } else if (!token) {
      if (!isRouteUnAuth && !localStorageToken) {
        history.replace('login');
      }
      setIsAuthenticated(false);
    }
  }, [location, token]);

  React.useEffect(() => {
    // if (isAuthenticated) {
    //   // Call APIs
    // } else {
    setTimeout(() => {
      setIsLoading(false);
    }, Math.ceil(Math.random() * 1000) + 500);
    // }
  }, [isAuthenticated]);

  return isLoading ? (
    <LoadingRoute />
  ) : isAuthenticated ? (
    <AuthRoutes />
  ) : localStorageToken ? (
    <LoadingRoute />
  ) : (
    <UnAuthRoutes />
  );
};

const LoadingRoute = () => (
  <Switch>
    <Route path="/">
      <div>
        <h1>Loading...</h1>
      </div>
    </Route>
  </Switch>
);

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

export default SwitchComp;
