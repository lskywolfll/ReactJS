import React from 'react';
// imagenes
import logo from '../images/logo.svg'
// Estilos
import './styles/Navbar.css'
// Pagina con react que contiene otros componentes
// Paginas es un componente que tiene mas componentes
class Navbar extends React.Component {
    render() {
        return (
            <div className="Navbar">
                <div className="container-fluid">
                    <a className="Navbar__brand" href='/'>
                        <img className="Navbar__brand-logo" src={logo} alt="Logo"/>
                        <span className="font-weight-light">Platzi</span>
                        <span className="font-weight-bold">Conf</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;