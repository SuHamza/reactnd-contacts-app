import React, { Component } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ImageInput from './ImageInput';
import serializeForm from 'form-serialize';

// const navigate = useNavigate();

// Handle Submission of the Contact Form
// const handleSubmit = (props) => {
//     e.preventDefault();
//     const values = serializeForm(e.target, { hash: true });
    
//     if(props.onCreateContact) {
//        props.onCreateContact(values);
//        props.history.push('/');
//     }
// }
// Convert CreateContact from Class to Function
// To be able to use useNavigate() Hook!
const CreateContact = (props) => {
    
    console.log(props);
        return (
            <div>
                <Link 
                    className="close-create-contact"
                    to='/'>
                        Close
                </Link>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    const values = serializeForm(e.target, { hash: true });
                    
                    if(props.onCreateContact) {
                    props.onCreateContact(values);
                    // useNavigate('/');
                    }
                }} 
                className="create-contact-form">
                    <ImageInput
                        className='create-contact-avatar-input'
                        name='avatarURL'
                        maxHeight={64}
                    ></ImageInput>
                    <div className="create-contact-details">
                        <input type='text' name='name' placeholder='Name'></input>
                        <input type='text' name="handle" placeholder="Handle"></input>
                        <button>Add Contact</button>
                    </div>
                </form>
            </div>
        )
}

export default CreateContact