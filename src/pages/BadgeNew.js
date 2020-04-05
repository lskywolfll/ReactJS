import React from 'react';
// Componentes
import header from '../images/platziconf-logo.svg';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';
// Api Rest
import Api from '../api';
// Estilos de la pagina
import './styles/BadgeNew.css'
// Alertas
import Swal from 'sweetalert2/dist/sweetalert2';
import api from '../api';

class BadgeNew extends React.Component {

    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            jobTitle: '',
            email: '',
            twitter: ''
        }
    };

    handleChange = e => {
        this.setState({
            // 1- Primera Solucion para el no sobreescribimiento de los estados y eliminando los anteriores
            // ...this.state.form,
            // [e.target.name]: e.target.value,
            // 2- Forma mejor ya que este copia y lo deja dentro del objeto del estado y no como el otro del primero que efectivamente se tiene el form pero vacio literalmente pero con las demas propieades a usar
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
            // 3- forma
            // const nextForm = this.state.form;
            // nextForm[e.target.name] = e.target.value;
        });
    };

    alertaFaltanDatos(faltantes) {
        Swal.fire({
            title: 'Alto ahi!',
            text: `Te faltan campos por rellenar 🧐\n ${faltantes}`,
            icon: 'error'
        });
    }

    alertaExitosa(){
        Swal.fire({
            title: 'Creacion Exitosa!',
            text: 'Muchas gracias por inscribirte en la conferencia 😊',
            icon: 'success'
        })
    }

    // Capturar el evento del envio de datos
    handleSubmit = async e => {
        e.preventDefault();
        let datoFaltante = [];

        console.log('El submit se ha activado!');

        for (const propiedad in this.state.form) {
            if (this.state.form.hasOwnProperty(propiedad)) {
                const valor = this.state.form[propiedad];
                if (valor === '') {
                    datoFaltante.push(propiedad);
                }
            }
        }

        if (this.state.form.firstName === '' || this.state.form.lastName === '' || this.state.form.email === '' || this.state.form.jobTitle === '' || this.state.form.twitter === '') {
            console.log('faltan datos');
            let camposFaltantes = datoFaltante.join(',');
            this.alertaFaltanDatos(camposFaltantes)
        }else{
            try {
                await api.badges.create(this.state.form);
                this.setState({ loading: false });
                this.alertaExitosa();
            } catch (error) {
                this.setState({
                    error: error,
                    loading: false
                });
            }
        }
    };

    render() {
        return (
            <React.Fragment>

                <div className="BadgeNew__hero">
                    <img className="BadgeNew__hero-image img-fluid" src={header} alt="Logo" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || 'FIRST_NAME'}
                                lastName={this.state.form.lastName || 'LAST_NAME'}
                                jobTitle={this.state.form.jobTitle || 'JOB_TITLE'}
                                twitter={this.state.form.twitter || 'TWITTER'}
                                email={this.state.form.email || 'EMAIL'}
                                avatarUrl="https://i.imgur.com/lp2L0A7.jpg"
                            />
                        </div>

                        <div className="col-6 masEspacio">
                            <BadgeForm onChange={this.handleChange} formValues={this.state.form} handleSubmit={this.handleSubmit} />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;