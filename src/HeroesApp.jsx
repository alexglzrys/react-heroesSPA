import React from 'react'
import { AuthProvider } from './auth'
import { AppRouter } from './router/AppRouter'


export const HeroesApp = () => {
  // Proyectar el contenido de la ruta seleccionada
  return (
    // La aplicación tiene acceso a todo el contexto de autenticación
    <AuthProvider>
        <AppRouter />
    </AuthProvider>
  )
}