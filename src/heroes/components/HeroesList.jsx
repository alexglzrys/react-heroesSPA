import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'

export const HeroesList = ({publisher}) => {

  // No se coloca dentro de un hook, ya que la data está en local y no se pretende cambiar
  // * Como la data no cambia, sería interesante memorizar esta información.
  const heroes = getHeroesByPublisher(publisher);

  return (
    <ul>
        {heroes.map(heroe => <li key={heroe.id}>{heroe.superhero}</li>)}
    </ul>
  )
}
