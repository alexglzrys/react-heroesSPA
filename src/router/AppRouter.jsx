import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Loginpage } from '../auth'
import { DCPage, MarvelPage } from '../heroes'



export const AppRouter = () => {
  // Router principal de la aplicación
  return (
    <>
        <Routes>
            <Route path='/marvel' element={<MarvelPage />} />
            <Route path='/dc' element={<DCPage />} />
            <Route path='/login' element={<Loginpage />} />
            <Route path='/' element={<Navigate to="marvel" />} /> 
        </Routes>
    </>
  )
}
