import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    // Custom Hook de React Router DOM - para trabajar con la navegaciòn programatica
    const navigate = useNavigate();

    // Función para hacer logout
    const handleLogout = () => {
        // Navegar a la ruta de /login, reemplazando el historial de navegaciòn (no podrà regresar a la ruta anterior)
        navigate('/login', {
            replace: true
        });
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <div className="container">
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">
                    {/* Colocar clase active a la ruta actualmente seleccionada */}
                    <NavLink 
                        className={({isActive}) => `nav-item nav-link  ${isActive ? ' active': ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" +  (isActive ? ' active': '')} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink 
                        className={({isActive}) => "nav-item nav-link" +  (isActive ? ' active': '')} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-primary'>Alejandro</span>
                    <button className='nav-item nav-link btn' onClick={handleLogout}>Logout</button>
                </ul>
            </div>
            </div>
        </nav>
    )
}