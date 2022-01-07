import React from "react";
import PropTypes from 'prop-types';

// Stateless Functional Components
function ListContacts (props) {
    return (
        <ol className="contact-list">
                {props.contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div
                            className="contact-avatar"
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button 
                            className="contact-remove"
                            onClick={() => props.onDeleteContact(contact)}
                        >
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
    );
}
// Use PropTypes Package to verify ListContacts Props
ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
}

export default ListContacts