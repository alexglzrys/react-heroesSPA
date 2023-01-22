import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PublicRoute = ({ children }) => {
  // Verificar si el usuario esta logeado
  const { logged } = useContext(AuthContext);

  // Si esta logeado lo redireccionamos a marvel, caso contrario presentamos el listado de rutas públicas
  return logged ? <Navigate to="/marvel" /> : children;
};
