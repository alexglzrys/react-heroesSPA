import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";

export const PrivateRouter = ({ children }) => {
  // Suscribirnos al contexto para saber si el usuario esta logeado
  const { logged } = useContext(AuthContext);

  // Retornar el componente hijo (listado de rutas) si el usuario esta logeado,
  // caso contrario redireccionamos al login
  return logged ? children : <Navigate to="/login" />;
};
