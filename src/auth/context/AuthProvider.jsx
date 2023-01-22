import React, { useReducer } from "react";
import { types } from "../types/types";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";

/*const initialState = {
  logged: false,
};*/

// Función inicializadora de estado. (Se genera con base en la lectura de localstorage)
// Cada vez que se refresque la pantalla se ejecutará esta función y recuperará el usuario de localstorage
const init = () => {
  // No es buena práctica acceder al Localstorage desde las acciones definidas en el reducer
  const user = JSON.parse(localStorage.getItem("user"));
  // Si hay usuario entonces está logeado (true)
  return {
    logged: !!user,
    user: user,
  };
};

export const AuthProvider = ({ children }) => {
  // Especificar el reducer a proveer en este contexto
  const [authState, dispatch] = useReducer(authReducer, {}, init);

  // Funciones a compartir en el contexto

  const login = (name = "") => {
    const user = { id: "ABCD", name };
    // definir la acción a despachar tras hacer login
    const action = {
      type: types.login,
      payload: user,
    };
    // Grabar en localStorage el nombre del usuario logeado
    localStorage.setItem("user", JSON.stringify(user));
    // Despachar acción (en este punto damos por hecho que el login fue correcto en el backend)
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
