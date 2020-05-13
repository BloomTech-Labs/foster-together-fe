import React from "react";
import { Route, Redirect } from "react-router-dom";
import { userInfo } from "os";

export const PrivateRouteAdmins = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (
          localStorage.getItem("token") &&
          localStorage.getItem("member-type") === "admins"
        ) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export const PrivateRouteUsers = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (localStorage.getItem("token")) {
          return <Component {...props} />;
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};
