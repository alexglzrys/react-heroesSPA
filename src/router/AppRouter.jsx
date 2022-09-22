import { Route, Routes } from 'react-router-dom'
import { Loginpage } from '../auth'
import { HeroesRoutes } from '../heroes'

export const AppRouter = () => {
  // Router principal de la aplicación. Incluye rutas específicas y routes de módulos
  return (
    <>
        <Routes>
            <Route path='/login' element={<Loginpage />} />
            {/* El módulo de Heroes tiene su propio router - Lo que permite que tenga un Layout diferente */}
            <Route path='/*' element={<HeroesRoutes />} />
        </Routes>
    </>
  )
}
