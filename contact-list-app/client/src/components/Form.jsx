import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveContact, editingContact, onUpdateContact }) => {

    // This is the original State with not initial Contact 
    const [contact, setContact] = useState(editingContact || {
        name: "", 
        notes: "", 
        email: "", 
        phone_number: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleNameChange = (event) => {
        const name = event.target.value;
        setContact((contact) => ({ ...contact, name }));
    };

    const handleTitleChange = (event) => {
        const notes = event.target.value;
        setContact((contact) => ({ ...contact, notes }));
    };

    const handleEmailChange = (event) => {
        const email = event.target.value;
        setContact((contact) => ({ ...contact, email }));
    };

    const handlePhoneNumberChange = (event) => {
        const phone_number = event.target.value;
        setContact((contact) => ({ ...contact, phone_number }));
    };

    // resets form to have empty or blank inputs
    const clearForm = () => {
        setContact({ name: "", notes: "", email: "", phone_number: "" })
    }

    //A function to handle the post request
    const postContact = (newContact) => {
        return fetch("http://localhost:3001/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newContact),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Contacts (the parent) for updating the list
                onSaveContact(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the update request
    const putContact = (toEditContact) => {
        return fetch(`http://localhost:3001/contacts/${contact.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditContact),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateContact(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            if (contact.id) {
                putContact(contact);
            } else {
                postContact(contact);
            }
        }
    };

    // creates state variable to hold error messages
    const [errors, setErrors] = useState({});

    // a function to check for errors before submitting the form
    const validateForm = () => {
        const newErrors = {};

        if (!contact.name) {
            newErrors.name = "Name is required.";
        }

        if (!contact.email) {
            newErrors.email = "Email is required.";
        } else if (!/\S+@\S+\.\S+/.test(contact.email)) {
            newErrors.email = "Email format is invalid.";
        }

        if (!contact.phone_number) {
            newErrors.phone_number = "Phone number is required.";
        } else if (!/^\d{3}-\d{3}-\d{4}$/.test(contact.phone_number))
            newErrors.phone_number = "Phone number format should be 000-000-0000."; {
        }

        // updates error
        setErrors(newErrors);
        console.log("Validation errors:",  newErrors);
        return Object.keys(newErrors).length === 0;
    };

    return (
        <Form style={{ top: "0", marginBottom: "90%" }} onSubmit={handleSubmit} data-test="form">
            <h2 style={{ textAlign: "center" }} data-test="form-header">Add New Friend!</h2>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <input
                    type="text"
                    id="add-user-name"
                    placeholder="Name"
                    required
                    value={contact.name}
                    onChange={handleNameChange}
                />
                {/* displays error handling on form */}
                {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <input
                    type="text"
                    id="add-title"
                    placeholder="Title"
                    // not required field
                    value={contact.notes}
                    onChange={handleTitleChange}
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Email</Form.Label>
                <input
                    type="text"
                    id="add-email"
                    placeholder="Email"
                    required
                    value={contact.email}
                    onChange={handleEmailChange}
                />
                {/* displays error handling on form */}
                {errors.email && <span style={{ color: 'red' }} data-test="email-error">{errors.email}</span>}
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <input
                    type="text"
                    id="add-phone-number"
                    placeholder="000-000-0000"
                    required
                    value={contact.phone_number}
                    onChange={handlePhoneNumberChange}
                />
                {/* displays error handling on form */}
                {errors.phone_number && <span style={{ color: 'red' }}>{errors.phone_number}</span>}
            </Form.Group>
            <Form.Group>
            <Button type="submit" variant="outline-success" style={{marginTop: "10px"}}>{contact.id ? "Edit contact" : "Add Contact"}</Button>
            {contact.id ? <Button type="button" variant="outline-warning" onClick={clearForm} style={{marginTop: "10px", marginLeft: "10px"}}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm