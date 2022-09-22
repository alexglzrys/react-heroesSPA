import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HeroesApp } from './HeroesApp'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* Gestionar mi aplicación con un manejador de rutas */}
      <HeroesApp />
    </BrowserRouter>
  </React.StrictMode>
)
