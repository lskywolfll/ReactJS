// const element = document.createElement('h1');
// element.innerText = 'Hello, Platzi Badges!';

// const container = document.getElementById('app');

// container.appendChild(element);
// JSX Necesita react y react-dom
import React from 'react';
import ReactDOM from 'react-dom';
// Importar Globalmente los estilos a nuestra app completa de react
import 'bootstrap/dist/css/bootstrap.css';
import './global.css'
import 'sweetalert2/dist/sweetalert2.css'
// Componentes
// import Badge from './components/Badge';
// Componente para las rutas
import App from './components/App';

// JSX
// const jsx = <h1>Hello, Platzi Badges from React!</h1>;
// tipo elemento, atributos(props o propiertes),contenido
// const element = React.createElement
//     (
//         'h1',
//         // props(funcionalidades o caracteristicas como un objeto)
//         { href: 'https://platzi.com' },
//         'hola! Soy los hijos.'
//     );

// const name = 'Rene';

// // const element = React.createElement('h1', {}, `Hola soy ${name}`);

// const jsx = <h1>Hola soy, {name}</h1>

// const element = (
//     <div>
//         <h1>Hola, Soy Rene</h1>
//         <p>Soy Desarrollador Full Stack</p>
//     </div>
// )
// Contenedor o donde se agregara el componente que nosotros queremos agregarle osea es adonde apuntara la flecha, es la direccion donde nosotros vamos a apuntar
const container = document.getElementById('app');

// Es una forma de crear vistas con javascript de manera mas sencilla, ya que al fin al cabo estamos creando React.createElement por detras al usar JSX por babel y webpack
// const jsx = <div>
//     <h1>Hola, soy René</h1>
//     <p>Soy Desarrollador backend</p>
// </div>

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Rene'),
//     React.createElement('h1', {}, 'Soy desarrollador Full Stack')
// )

// ReactDOM.render(__qué__,__donde__)

// Se aconseja que al renderear componentes los dejes dentro de una etiqueta con cierre ej: <componentName />
// ReactDOM.render(
// <Badge 
// // Estas son las propiedades(props) del componente en el cual nos requiere tener un dato para poder pintarlo con ciertas cosas(data) y no a nivel de estilos
// firstName="René" 
// lastName="Sanchez"
// avatarUrl="https://i.imgur.com/lp2L0A7.jpg"
// jobTitle="Desarrollador Full Stack" 
// twitter="lReneNK" 
// />, 
// container);

ReactDOM.render(<App />, container);