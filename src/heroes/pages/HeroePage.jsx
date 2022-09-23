import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroePage = () => {
  // Obtener los segmentos enviados en la URL - (Info pasada a la ruta)
  const {id} = useParams();
  // Obtener un heroe por su id
  const heroe = getHeroById(id);
 
  if (!heroe) {
    // Podemos mostrar un componente del tipo 404
    // Redireccionar al usuario cuando no hay data que mostrar, etc
    return <Navigate to="/marvel" />
  }

  return (
    <h1>Heroe Page</h1>

  )
}
