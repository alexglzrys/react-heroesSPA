import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

const initialState = {
  logged: false,
};

export const AuthProvider = ({ children }) => {
  // Especificar el reducer a proveer en este contexto
  const [authState, dispatch] = useReducer(authReducer, initialState);

  // Funciones a compartir en el contexto

  const login = (name = "") => {
    // definir la acción a despachar tras hacer login
    const action = {
      type: types.login,
      payload: {
        id: "ABC",
        name,
      },
    };
    dispatch(action);
  };

  return (
    // No es una buena idea dar todo el poder a los componentes para que despachen cualquier acción. Para ello, es mejor pasar funciones con acciones permitidas
    <AuthContext.Provider
      value={{
        ...authState,
        login,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
