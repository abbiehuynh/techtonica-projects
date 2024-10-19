import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import './Contacts.css';

const Contact = ({contact, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateContact) => {
        toUpdate(toUpdateContact)
    }

    const onDelete = (toDeleteContact) => {
        toDelete(toDeleteContact)
    }

    return (
        <Card style={{width: '30rem'}}>
            <Card.Body>
            <Card.Title>{contact.name}</Card.Title>
            <Card.Subtitle>{contact.notes}</Card.Subtitle>
            <Card.Text>{contact.email}</Card.Text>
            <Card.Text>{contact.phone_number}</Card.Text>
            <Button>
                <Link to="/contact/details">Details</Link>
            </Button>
            <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Contact;