import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../api';
import { Link } from 'react-router-dom';

class Badges extends React.Component {
    // Se crea al artista y el escenario
    constructor(props) {
        // Se heredan todos los props y cuando lleguen nuevos tambien se tendran por lo cual podremos usarlos cuando se desmonten nuestros componentes
        super(props);
        this.state = {
            loading: true,
            error: null,
            data: undefined
        }
        console.log('1. constructor()');
    }
    // El artista se pone un traje y se abre el telon
    componentDidMount() {
        console.log('3. componentDidMount()');
        this.obtenerBadges();
    }

    obtenerBadges = async () => {
        this.setState({
            loading: true,
            error: null
        });

        try {
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data
            });
        } catch (error) {
            this.setState({
                loading: false,
                error: error
            });
        }
    }

    // El artista cambia de traje y color
    componentDidUpdate(prevProps, prevState) {
        console.log('5. componentDidUpdate');
        console.log({
            prevProps,
            prevState
        });

        console.log({
            props: this.props,
            state: this.state
        });
    }
    // Sale de escena el artista y se hace limpieza
    componentWillUnmount() {
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
    }

    render() {

        if (this.state.loading === true) {
            return <PageLoading />
        }

        if (this.state.error){
            return <PageError error={this.state.error} />
        }

        console.log('2/4. render()');
        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges_conf-logo"
                                src={confLogo}
                                alt=""
                            />
                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    {this.state.data.length > 0 && (
                        <div className="Badges__buttons">
                            <Link to="/badges/new" className="btn btn-primary">
                                New Badge
                        </Link>
                        </div>
                    )}

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList data={this.state.data} />
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges;