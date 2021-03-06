import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../utils/UserContext";

const ProtectedRoute = ({ path, children }) => {
  const user = useContext(UserContext);
  const jwt = localStorage.getItem("jwt");

  return (
    <Route path={path}>
      {(user || jwt) ? children : <Redirect to="/signin" />}
    </Route>
  );
};

export default ProtectedRoute;
