import React from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroesList = ({publisher}) => {

  // No se coloca dentro de un hook, ya que la data está en local y no se pretende cambiar
  // * Como la data no cambia, sería interesante memorizar esta información.
  const heroes = getHeroesByPublisher(publisher);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {heroes.map(heroe => <HeroCard key={heroe.id} {...heroe} />)}
    </div>
  )
}
