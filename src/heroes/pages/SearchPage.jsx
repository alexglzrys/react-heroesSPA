import React from 'react'
import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { getHeroesByName } from '../helpers/getHeroesByName';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const navigate = useNavigate();
  // Custom Hook para saber información de la ruta actual
  const location = useLocation();
  // Importar custom hook para controlar campos de formulario
  const { searchText, handleInputChange} = useForm({
    searchText: ''
  });
  
  // * No hay necesidad de agrupar esto en un useEffect, ya que al inyectar un nuevo queryString, se actualiza el estado y renderiza el componente. Llamando así a la función de busqueda con la data actualizada
  // Obtener las query String enviadas a la ruta en forma de objeto (el paquete query-string nos permite generar todo ello a partir de la información del location.search)
  // Solo me interesa el query q
  const {q = ''} = queryString.parse(location.search);
  const heroes = getHeroesByName(q);

  // * Variables helper para mostrar u ocultar los mensajes de error
  // ? Pueden aislarse en un custom hook para tener más limpia la lógica del componente
  const showSearch = (q.length === 0);
  const showError = q.length !== 0 && heroes.length === 0

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // if (searchText.trim().length <= 1) return;
    // Inyectar query String a la ruta actual
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  }
  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={handleFormSubmit}>
            <input type="text" className='form-control' placeholder='Search a hero' name='searchText' autoComplete='off' value={searchText} onChange={handleInputChange} />
            <button type='sumbit' className='btn btn-outline-primary mt-1'>Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {/* Debemos evitar que el código sea dificil de leér */}
          {/* { q.length == 0 
            ? (<div className="alert alert-primary">Search a hero</div>) 
            : heroes.length == 0 && (<div className="alert alert-danger">No hero with <strong>{ q }</strong></div>)} */}
          

          {/* Condicionar los componentes mediante el uso de estilos CSS - Esto no destruye el componente solo lo oculta */}
          {/* <div className="alert alert-primary" style={{display: showSearch ? 'block' : 'none' }}>Search a hero</div>
          <div className="alert alert-danger" style={{display: showError ? 'block' : 'none'}}>No hero with <strong>{ q }</strong></div> */}

          {/* Con variables helper podemos condicionar nuestros componentes de tal forma que sea fácil leer el código a nivel presentacional */}
          {showSearch && (<div className="alert alert-primary animate__animated animate__fadeIn">Search a hero</div>)}
          {showError && (<div className="alert alert-danger animate__animated animate__fadeIn">No hero with <strong>{ q }</strong></div>)}

          {heroes.map(heroe => <HeroCard key={heroe.id} {...heroe} />)}
        </div>

      </div>
    </>
  )
}
