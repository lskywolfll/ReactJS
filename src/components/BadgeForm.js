import React from 'react';

class BadgeForm extends React.Component{
    // Contenedor de estados para controlarlos
    state = {
        // firstName: '',
        // lastName: '',
        // jobTitle: '',
        // email: '',
        // twitter: '@'
    };

    // Capturador del evento de un cambio en el input
    // handleChange = e => {
    //     // console.log({
    //     //     name: e.target.name,
    //     //     value: e.target.value
    //     // });

    //     this.setState({
    //         // Toma el evento respectivo y se le asigna su valor tener en mente que el objeto tendra el nombre de propiedad que le hayas dado a la etiqueta
    //         [e.target.name]: e.target.value,
    //     });
    // };
    // Capturador del evento click
    handleClick = e => {
        console.log('El boton ha sido clickeado');
    };
    // Capturar el evento del envio de datos
    handleSubmit = e => {
       e.preventDefault();
       console.log('El submit se ha activado!');
       console.log(this.state);
    };

    render(){
        return (
            <div>
                <h1>New Attendant</h1>

                {/* 2 Forma
                
                Capturando el evento del form para enviar su data hacia otro lugar, a la api respectivamente.

                Validando a nuestro gusto si se enviara o no se enviara validando nosotros los datos de los demas propiedades

                Se usa la propiedad dada desde la pagina con su evento controlador para que este lo tenga el pader que contiene todos los componentes de tal forma que todos puedan acceder desde el y se creen las propiedades respectivas para su uso en ellos

                Tener en mente que puedes mandar por una propiedad dentro del componente en este caso el formulario para que este lo use para manejarlo desde otro componente y muchas otras cosas tambien por ende tener en mento estos usos que se le pueden dar a la hora de innovar usando funcionalidades externas a este que quiera usarlo
                */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" placeholder="Nombre" value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" placeholder="Apellido" value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" placeholder="Cargo" value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" placeholder="Correo" value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="twitter" placeholder="@usuario" value={this.props.formValues.twitter}></input>
                    </div>
                    {/*1- Forma 
                    
                    Para sacar el problema del submit que pasa recurrentemente al tener un boton dentro de un form
                    
                    Debemos de asignarle un tipo boton para que ya no se lance de manera instantanea al clickearlo

                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                    */}
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>
        );
    }
}

export default BadgeForm;