import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import './Sightings.css'

const Sightings = ({sightings, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateSightings) => {
        toUpdate(toUpdateSightings)
    }

    const onDelete = (toDeleteSightings) => {
        toDelete(toDeleteSightings)
    }

    return (
        <Card style={{width: '30rem'}}>
            <Card.Body>
                <Card.Img src={sightings.image_url} style={{ borderRadius: '20px', padding: '10px'}} />
                <Card.Title>{sightings.individual_seen}</Card.Title>
                <Card.Subtitle>{sightings.species}</Card.Subtitle>
                {/* <Card.Text>Healthy?: {sightings.is_healthy}</Card.Text> */}
                <Card.Text>Date: {sightings.date_of_sighting}</Card.Text>
                <Card.Text>Location: {sightings.location_of_sighting}</Card.Text>
                <Card.Text>Ranger's Email: {sightings.email}</Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button> */}
            {/* <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default Sightings;