import React, { useState, useMemo } from 'react';
import './styles/BadgesList.css';
import twitterIcon from '../images/twitter.png';
import Gravatar from '../components/Gravatar';
import FilterListBadges from '../components/FilterListBadges';
import { Link } from 'react-router-dom';

class BadgesListItem extends React.Component {
    render() {
        return (
            <div className="Badges__header">
                <div className="Badges__section-name">
                    <Gravatar
                        className="rounded-circle Badges_avatar"
                        email={this.props.badge.email}
                    />
                </div>

                <div className="Badges__section-info">
                    <h1 className="Badges__section__name">{this.props.badge.firstName} {this.props.badge.lastName}</h1>
                    <div className="Badges__section__twitter font-weight-bolder">
                        <img
                            className="icon__twitter"
                            src={twitterIcon}
                            alt="icono de twitter, un ave volando hacia el cielo"
                        />
                        <span className="Badges__section_textTwitter">@{this.props.badge.twitter}</span>
                    </div>
                    <h3 className="Badges__section__jobTitle"> {this.props.badge.jobTitle}</h3>
                </div>
            </div>
        );
    }
}

function useSearchBadges(badges) {
    const [query, setQuery] = useState("");
    const [filteredBadges, setFilteredResults] = useState(badges);

    useMemo(() => {
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`
                .toLowerCase()
                .includes(query.toLowerCase());
        });

        setFilteredResults(result);
    }, [badges, query]);

    return { query, setQuery, filteredBadges }
}

function BadgesList(props) {

    const data = props.data;

    const { query, setQuery, filteredBadges } = useSearchBadges(data);

    if (filteredBadges.length === 0 || data === undefined) {
        return (
            <React.Fragment>
                <FilterListBadges onChange={setQuery} filterValue={query} />
                <div className="NotFoundData">
                    <h3>No badges were found</h3>
                    <Link className="btn btn-primary" to="badges/new">
                        Create new badge
                    </Link>
                </div>
            </React.Fragment>
        )
    }

    return (
        <>
            <FilterListBadges onChange={setQuery} filterValue={query} />
            <ul className="list-unstyled">
                {filteredBadges.slice(0).reverse().map((badge) => {
                    return (
                        <li key={badge.id}>
                            <Link
                                className="text-decoration-none"
                                to={`/badges/${badge.id}`}
                                onKeyDwon
                                style={{ color: 'black' }}>
                                <BadgesListItem badge={badge} />
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default BadgesList;