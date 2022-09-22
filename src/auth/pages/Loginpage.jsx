import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Loginpage = () => {
  // Custom Hook de React Router DOM - para trabajar con la navegaciòn programatica
  const navigate = useNavigate();

  // Función para hacer Login
  const handleLogin = () => {
    // Navegar programaticamente a /
    navigate('/', {
      replace: true,    // No deseamos que el usuario pueda regresar a la ruta anterior (ya se logeo)
    })
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className='btn btn-primary' onClick={handleLogin}>Login</button>
    </div>
  )
}
