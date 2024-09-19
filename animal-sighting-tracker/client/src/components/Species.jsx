import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Species = ({species, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateSpecies) => {
        toUpdate(toUpdateSpecies)
    }

    const onDelete = (toDeleteSpecies) => {
        toDelete(toDeleteSpecies)
    }

    return (
        <Card style={{width: '30rem'}}>
            <Card.Body>
                <Card.Img src={species.image_url} style={{ borderRadius: '20px', padding: '10px'}} />
                <Card.Title>{species.common_name}</Card.Title>
                <Card.Subtitle>{species.scientific_name}</Card.Subtitle>
                <Card.Text>Population Count: {species.population_count}</Card.Text>
                <Card.Text>CSC: {species.conservation_status_code}</Card.Text>
                <Card.Text>Record Creation Timestamp: {species.record_creation_timestamp}</Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(student)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(student)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>
    )

}

export default Species;