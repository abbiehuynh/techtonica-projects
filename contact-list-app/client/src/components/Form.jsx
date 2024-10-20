import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const MyForm = ({ onSaveContact, editingContact, onUpdateContact }) => {

    // This is the original State with not initial Contact 
    const [contact, setContact] = useState(editingContact || {
        firstname: "",
        lastname: "",
        is_current: false
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
        const phoneNumber = event.target.value;
        setContact((contact) => ({ ...contact, phoneNumber }));
    };

    const clearForm = () => {
        setContact({ firstname: "", lastname: "", is_current: false })
    }

    //A function to handle the post request
    const postContact = (newContact) => {
        return fetch("http://localhost:8080/api/contacts", {
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

    //A function to handle the post request
    const putContact = (toEditContact) => {
        return fetch(`http://localhost:8080/api/contacts/${toEditContact.id}`, {
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
        if (contact.id) {
            putContact(contact);
        } else {
            postContact(contact);
        }
    };

    return (
        <Form className='box form-contacts' onSubmit={handleSubmit}>
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
            </Form.Group>
            <Form.Group>
                <Form.Label>Title</Form.Label>
                <input
                    type="text"
                    id="add-title"
                    placeholder="Title"
                    required
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
            </Form.Group>
            <Form.Group>
                <Form.Label>Phone Number</Form.Label>
                <input
                    type="text"
                    id="add-email"
                    placeholder="000-000-0000"
                    required
                    value={contact.phone_number}
                    onChange={handlePhoneNumberChange}
                />
            </Form.Group>
            <Form.Group>
            <Button type="submit" variant="outline-success" style={{marginTop: "10px"}}>{contact.id ? "Edit contact" : "Add Contact"}</Button>
            {contact.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm