import React from 'react'
import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroePage = () => {
  const navigate = useNavigate();
  
  // Obtener los segmentos enviados en la URL - (Info pasada a la ruta)
  const {id} = useParams();

  // Obtener un heroe por su id
  // Memorizar el valor retornado por la funciòn en caso de que el componente o su padre se renderice. Solo se debe volver a ejecutar la funciòn si el id cambia
  const heroe = useMemo(() => getHeroById(id), [id]) 
  
  const handleNavigateToBack = () => {
    // Regresar a la pàgina anterior
    navigate(-1)
  }
 
  if (!heroe) {
    // Podemos mostrar un componente del tipo 404
    // Redireccionar al usuario cuando no hay data que mostrar, etc
    return <Navigate to="/marvel" />
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={`/assets/heroes/${id}.jpg`} alt={heroe.superhero} className='img-thumbnail' />
      </div>
      <div className="col-8">
        <h3>{heroe.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className='list-group-item'><strong>Alter ego:</strong> {heroe.alter_ego}</li>
          <li className="list-group-item"><strong>Publisher:</strong> {heroe.publisher}</li>
          <li className='list-group-item'><strong>First appearance</strong> {heroe.first_appearance}</li>
        </ul>
        <h5 className='mt-3'>Characters</h5>
        <p>{heroe.characters}</p>
        <button className='btn btn-outline-primary' onClick={handleNavigateToBack}>Regresar</button>
      </div>
    </div>

  )
}
