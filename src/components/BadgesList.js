import React from 'react';
import './styles/BadgesList.css';
import twitterIcon from '../images/twitter.png';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {

    handleClickTwitter(nickname){
        console.log(nickname);
    }

    render() {

        if(this.props.data.length === 0 || this.props.data === undefined){
            return (
                <div className="NotFoundData">
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="badges/new">
                        Create new badge
                    </Link>
                </div>
            )
        }

        return (
            <ul className="list-unstyled">
                {this.props.data.map((badge) => {
                    return (
                        <li key={badge.id}>
                            {/* <div className="container Badge__header">

                            </div> */}

                            <div className="Badges__header">
                                <div className="Badges__section-name">
                                    <img className="rounded-circle Badges_avatar" src={badge.avatarUrl} alt="Avatar" />
                                </div>

                                <div className="Badges__section-info">
                                    <h1 className="Badges__section__name">{badge.firstName} {badge.lastName}</h1>
                                    <div className="Badges__section__twitter font-weight-bolder">
                                        <img
                                            className="icon__twitter"
                                            src={twitterIcon}
                                            alt=""
                                        />
                                        <span className="Badges__section_textTwitter">@{badge.twitter}</span>
                                    </div>
                                    <h3 className="Badges__section__jobTitle"> {badge.jobTitle}</h3>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgesList;