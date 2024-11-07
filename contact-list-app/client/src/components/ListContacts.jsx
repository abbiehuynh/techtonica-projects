import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Contact from './Contact';

const ListContacts = () => {

    // creates intitial state of contacts
    const [contacts, setContacts] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingContact, setEditingContact] = useState(null)

    const loadContacts = () => {
        // A function to fetch the list of contacts that will be load anytime that list change
        fetch("http://localhost:3001/contacts")
            .then((response) => response.json())
            .then((contacts) => {
                setContacts(contacts);
            });
    }

    useEffect(() => {
        loadContacts();
    }, []);

    const onSaveContact = (newContact) => {
        setContacts((contacts) => [...contacts, newContact]);
    }


    //A function to control the update in the parent (contact component)
    const updateContact = (savedContact) => {
        // This function should update the whole list of contacts - 
        loadContacts();
    }

    //A function to handle the Delete funtionality
    const onDelete = (contact) => {
        return fetch(`http://localhost:3001/contacts/details/${contact.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadContacts();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdateContact) => {
        setEditingContact(toUpdateContact);

    }



    return (
        <div className="container">
        <div className="box list-contacts" data-test="contacts-list">
            <h2 id="contacts-header">Contact List </h2>
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '20px', paddingTop: '20px' }}>
                {contacts.map((contact) => {
                    return <li key={contact.id}> <Contact contact={contact} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingContact ? editingContact.id : null} onSaveContact={onSaveContact} editingContact={editingContact} onUpdateContact={updateContact} />
        </div>
    );
}


export default ListContacts;