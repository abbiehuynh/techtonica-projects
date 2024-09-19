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
                {/* <Card.Img src={species.image_url} style={{ borderRadius: '20px', padding: '10px'}} /> */}
                <Card.Title>{sightings.individual_seen}</Card.Title>
                <Card.Subtitle>{sightings.individual_seen}</Card.Subtitle>
                <Card.Text>Population Count: {sightings.individual_seen}</Card.Text>
                <Card.Text>CSC: {sightings.individual_seen}</Card.Text>
                <Card.Text>Record Creation Timestamp: {sightings.individual_seen}</Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default Sightings;