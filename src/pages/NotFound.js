import React from 'react';
import './styles/NotFound.css';
import NotFoundImage from '../images/img404.png';

function NotFound() {
    return (
        <div className="NotFound">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <img
                            src={NotFoundImage}
                            className="NotFound__image"
                            alt="Hombre en el espacio donde flota y con una caja en la parte de abajo" />
                        <h1 className="NotFound__title">404: Not Found</h1>
                    </div>
                    <div className="col-10">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;