import React from 'react';
import './styles/home.css'
import Astronauts from '../images/astronauts.svg';
import ConfLogo from '../images/platziconf-logo.svg';
import { Link } from 'react-router-dom';

function Home() {
    return (

        <div className="container-fluid home">
            <div className="row">
                <div className="col-4">
                    <img
                        src={ConfLogo}
                        className="home__confLogo"
                        alt=""
                    />

                    <h3 className="home__title">PRINT YOUR BADGES</h3>
                    <p className="home__content">The easiest way to manage your conference</p>
                    <Link to="/badges/new" className="btn btn-primary home__button">Start Now</Link>
                </div>
                <div className="col-8">
                    <img
                        src={Astronauts}
                        className="home__astronauts"
                        alt="Astronautas con trajes del espacio"
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;