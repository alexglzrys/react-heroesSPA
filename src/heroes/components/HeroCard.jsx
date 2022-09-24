import React from 'react'
import { Link } from 'react-router-dom'

// Un componente pequeño que no tiene sentido aislarlo en un archivo independiente
const CharactersByHero = ({characters, alter_hero}) => {
    // Algunos heroes han interpretado más de un personaje
    return (
      alter_hero !== characters && <p>{characters}</p>
    )
  }
  
export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {
    const heroImageUrl = `/assets/heroes/${id}.jpg`
  return (
    <div className='col animate__animated animate__fadeIn'>
        <div className="card">
            <div className="row no-gutters">
                <div className="col-4">
                    <img src={heroImageUrl} className="card-img" alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        <CharactersByHero characters={characters} alter_hero={alter_ego}/>
                        <p className='card-text'>
                            <small className="text-muted">{ first_appearance }</small>
                        </p>
                        <Link to={`/heroe/${id}`} className="btn btn-link">Más...</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
