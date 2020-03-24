import React from 'react';
import Navbar from '../components/Navbar';

function Layout(props) {
    // const children = props.children;
    return (
        // React Fragment hace que no necesitemos un contenedor y por ende retornara todo lo que tengamos dentro de un contenedor o no tengamos
        <React.Fragment>
            <Navbar />
            {props.children}
        </React.Fragment>
    )
}

export default Layout;