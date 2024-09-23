import React from "react";
import { Routes as R, Route } from "react-router-dom";
import { Home, Login, Register, AuthWrapper } from "./";

function Routes({ isLoggedIn, handleLogin }) {
  return (
    <R>
      <Route
        path="/"
        element={<Home isLoggedIn={isLoggedIn} handleLogin={handleLogin} />}
      />
      <Route
        path="/login"
        element={
          <AuthWrapper title="Login">
            <Login handleLogin={handleLogin} />
          </AuthWrapper>
        }
      />
      <Route
        path="/register"
        element={
          <AuthWrapper title="Register">
            <Register />
          </AuthWrapper>
        }
      />
    </R>
  );
}

export default Routes;
