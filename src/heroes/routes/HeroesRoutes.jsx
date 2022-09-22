import { Navigate, Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { DCPage, HeroePage, MarvelPage, SearchPage } from '../pages'

export const HeroesRoutes = () => {
    // El tener un router para cada módulo, permite que sus páginas se muestren con un Layout diferente
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path='/marvel' element={<MarvelPage />} />
                <Route path='/dc' element={<DCPage />} />
                <Route path='/search' element={<SearchPage />} />
                <Route path='/heroe' element={<HeroePage />} />
                <Route path='/' element={<Navigate to="marvel" />} /> 
            </Routes>
        </div>
    </>
  )
}
