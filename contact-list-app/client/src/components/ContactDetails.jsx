import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contacts.css';

const ContactDetails = () => {
// creates contactId from route params
const { contactId } = useParams();

// creates intitial state of contactDetails
const [contactDetails, setContactDetails] = useState([]);

const loadContactDetails = () => {
    // A function to fetch contact's details using contact Id
    fetch(`http://localhost:3001/contacts/${contactId}/details`)
        .then((response) => response.json())
        .then((contactDetails) => {
            setContactDetails(contactDetails[0]);
            console.log(contactDetails)
        });
}

useEffect(() => {
    loadContactDetails();
}, [contactId]);

  return (
        <Card style={{width: "80%", margin: "auto", height: "auto"}}>
            <Card.Body>
                <Card.Title>Name: {contactDetails.name}</Card.Title>
                <Card.Subtitle>Location: {contactDetails.home_location}</Card.Subtitle>
                <Card.Text>
                    <strong>Work:</strong>
                        <li>Occupation: {contactDetails.occupation}</li>
                        <li>Location: {contactDetails.work_location}</li>
                </Card.Text>
                <Card.Text>
                    <strong>Notes:</strong>
                        <li>{contactDetails.contact_notes}</li>
                        <li>{contactDetails.personal_notes}</li>
                </Card.Text>
                
                <Card.Text> 
                    <strong>Contact Info:</strong> <br />
                    <FaEnvelope /> {contactDetails.email} <br />
                    <FaPhone /> {contactDetails.phone_number} <br />
                </Card.Text>
                <Card.Text>{}</Card.Text>
                {/* <Button variant="outline-danger" onClick={()=>{onDelete(contact)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button> */}
                {/* <Button variant="outline-info" onClick={()=>{onUpdate(contact)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
  )
}

export default ContactDetails;