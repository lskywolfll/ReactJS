import React from 'react';
// import ReactDOM from 'react-dom';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';

class Badge extends React.Component {

    render() {

        // Props
        // Son propiedades como los que tiene html,css con su class, src, type y etc, por ende podemos crear propiedades unicas(se puede ver como etiqueta) y nosotros le damos un valor mediante el llamado a este componente ej: <component propiertie="value" /> o <Badge nombre="rene" />
        // this.props;

        // Tambien podemos hacer destructuracion de las propiedads que nos llegan y las convertimos en variables
        // NT: Deben ser declaradas antes del return
        const
            {
                firstName,
                lastName,
                jobTitle,
                twitter,
                avatarUrl,
                email
            } = this.props;

        // Por convenciones para agregar los estilos deseados para el html que tengamos en nuestros componentes debemos usar classname en vez de class
        // Esto es por que ya js tiene una palabra clave llamada class por eso nos recomienda que mejor usemos otro que es el classname
        return <div className="Badge">
            <div className="Badge__header">
                {/* propierti={value} => prop(caracteristica)*/}
                <img src={confLogo} alt="Logo de la conferencia" />
            </div>

            <div className="Badge__section-name">
                <Gravatar
                    className="rounded-circle Badge_avatar"
                    email={email} s
                    rc={avatarUrl}
                    alt="Avatar"
                />
                <h1>{firstName} <br /> {lastName}</h1>
            </div>

            <div className="Badge__section-info">
                <h3>{jobTitle}</h3>
                <div>@{twitter}</div>
            </div>

            <div className="Badge__footer">#PlatziConf</div>
        </div>
    }
}
// Exportacion del componente
export default Badge;