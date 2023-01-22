import React from "react";
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRoute = ({ children }) => {
  // Suscribirnos al contexto para saber si el usuario esta logeado
  const { logged } = useContext(AuthContext);

  // Seguimiento de ruta actual
  // Objetivo: Redireccionar al usuario a la última ruta visitada trás hacer login
  const { pathname, search } = useLocation();
  const lastPath = pathname + search;
  localStorage.setItem("lastPath", lastPath);

  // Retornar el componente hijo (listado de rutas) si el usuario esta logeado,
  // caso contrario redireccionamos al login
  return logged ? children : <Navigate to="/login" />;
};
