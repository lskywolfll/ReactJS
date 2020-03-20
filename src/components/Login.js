import React from "react";
// import ReactDOM from 'react-dom';
import confLogo from "../images/badge-header.svg";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div>
          {/* propierti={value} => prop(caracteristica)*/}
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>

        <div>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50
"
            alt="Avatar"
          />
          <h1>Hola</h1>
          <h2>Debes ingresar tu correo y contraseña</h2>
          <p>Recuerda que tu contraseña es por tu rut ej: 20.200.764-3</p>
        </div>

        <div>
          <label>Correo:</label>
          <input type="text" />

          <label>Contraseña:</label>
          <input type="text" />
        </div>

        <div>
          <footer>Has olvidado la contraseña ?</footer>
        </div>
      </div>
    );
  }
}
// Exportacion del componente
export default Login;
