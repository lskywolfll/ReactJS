import React from 'react'
import './styles/BadgeDetails.css';
import { Link } from 'react-router-dom';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';
import confLogo from '../images/platziconf-logo.svg'

function BadgeDetails(props) {
    
    const {
        firstName,
        lastName,
        jobTitle,
        twitter,
        avatarUrl,
        email,
        id
    } = props.badge

    return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 BadgeDetails__hero-attendant-name">
                            <h1>{firstName} {lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <Badge
                            firstName={firstName}
                            lastName={lastName}
                            jobTitle={jobTitle}
                            twitter={twitter}
                            avatarUrl={avatarUrl}
                            email={email}
                        />
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <Link
                                className="btn btn-primary mb-4"
                                to={`/badges/${id}/edit`}
                            >
                                Edit
                            </Link>
                        </div>

                        <div>
                            <button
                                onClick={props.onOpenModal}
                                className="btn btn-danger"
                            >
                                Delete
                                </button>
                            <DeleteBadgeModal 
                            isOpen={props.modalIsOpen} 
                            onClose={props.onCloseModal}
                            onClick={props.onOpenModal}
                            onDeleteBadge={props.onDeleteBadge}
                            >Lorem </DeleteBadgeModal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;