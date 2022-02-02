import React from "react";
import { Route, Routes as Routess } from "react-router-dom";
import LoginPage from "../page/LoginPage";

const loginRoutes = [{ path: "/", element: <LoginPage /> }];

export function LoginRoutes() {
  return (
    <Routess>
      {loginRoutes.map(({ path, element }) => {
        return <Route key={path} path={path} element={element} />;
      })}
    </Routess>
  );
}
