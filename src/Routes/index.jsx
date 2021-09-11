import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../Provider/Auth";
import PostsProvider from "../Provider/Posts";
import Switch from "./switch";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <PostsProvider>
          <Switch />
        </PostsProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
