import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import { Link } from 'react-router-dom';

class Badges extends React.Component {
    // Se crea al artista y el escenario
    constructor(props) {
        // Se heredan todos los props y cuando lleguen nuevos tambien se tendran por lo cual podremos usarlos cuando se desmonten nuestros componentes
        super(props);
        this.state = {
            data: []
        }
        console.log('1. constructor()');
    }
    // El artista se pone un traje y se abre el telon
    componentDidMount(){
        console.log('3. componentDidMount()');
        // De esta manera tambien podemos crear un id de timeOut
       this.timeoutId = setTimeout(() => {
            this.setState({
                data: [
                    {
                      "id": "2de30c42-9deb-40fc-a41f-05e62b5939a7",
                      "firstName": "Freda",
                      "lastName": "Grady",
                      "email": "Leann_Berge@gmail.com",
                      "jobTitle": "Legacy Brand Director",
                      "twitter": "FredaGrady22221-7573",
                      "avatarUrl": "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
                    },
                    {
                      "id": "d00d3614-101a-44ca-b6c2-0be075aeed3d",
                      "firstName": "Major",
                      "lastName": "Rodriguez",
                      "email": "Ilene66@hotmail.com",
                      "jobTitle": "Human Research Architect",
                      "twitter": "MajorRodriguez61545",
                      "avatarUrl": "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
                    },
                    {
                      "id": "63c03386-33a2-4512-9ac1-354ad7bec5e9",
                      "firstName": "Daphney",
                      "lastName": "Torphy",
                      "email": "Ron61@hotmail.com",
                      "jobTitle": "National Markets Officer",
                      "twitter": "DaphneyTorphy96105",
                      "avatarUrl": "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
                    },
                  ]
            })
        },3000)
    }
    // El artista cambia de traje y color
    componentDidUpdate(prevProps, prevState){
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
    componentWillUnmount(){
        console.log('6. componentWillUnmount');
        clearTimeout(this.timeoutId);
    }

    render() {
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
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList data={this.state.data}/>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges;