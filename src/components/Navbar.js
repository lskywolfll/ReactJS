import React from 'react';
// imagenes
import logo from '../images/logo.svg'
// Estilos
import './styles/Navbar.css'
import { Link } from 'react-router-dom';
// Pagina con react que contiene otros componentes
// Paginas es un componente que tiene mas componentes
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <Link className="Navbar__brand" to='/'>
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;