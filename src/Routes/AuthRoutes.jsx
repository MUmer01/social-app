import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../features/home';
import UserPosts from '../features/userposts';
import PostsProvider from '../Provider/Posts';
import Header from '../components/header';

const AuthRoutes = () => (
  <PostsProvider>
    <Header />
    <Switch>
      <Route path="/home">
        <Home />
      </Route>
      <Route path="/user/:userName">
        <UserPosts />
      </Route>
      <Redirect from="/" to="/home" />
    </Switch>
  </PostsProvider>
);

export { AuthRoutes };
