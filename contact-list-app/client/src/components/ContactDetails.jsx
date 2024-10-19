import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>Contact Details
        <p>{contactDetails.name}</p>

    </div>
  )
}

export default ContactDetails;