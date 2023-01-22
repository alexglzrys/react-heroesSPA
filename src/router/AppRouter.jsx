import { Route, Routes } from "react-router-dom";
import { Loginpage } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  // Router principal de la aplicación. Incluye rutas específicas y routes de módulos
  return (
    <>
      <Routes>
        {/* <Route path="/login" element={<Loginpage />} /> */}

        {/* Especificar el listado de rutas públicas (solo usuarios invitados pueden acceder a ellas) */}
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Loginpage />
            </PublicRoute>
          }
        />

        {/* El módulo de Heroes tiene su propio router - Lo que permite que tenga un Layout diferente */}
        {/* <Route path='/*' element={<HeroesRoutes />} /> */}

        {/* Usar el componente de rutas privadas y especificar como hijo
        que rutas deberían tratarse como tal */}
        <Route
          path="/*"
          element={
            <PrivateRoute>
              <HeroesRoutes />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};
