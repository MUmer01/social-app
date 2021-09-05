import React from "react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "../Provider/Auth";
import Switch from "./switch";

const Routes = (props) => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Switch />
      </AuthProvider>
    </BrowserRouter>
  );
};

export default Routes;
