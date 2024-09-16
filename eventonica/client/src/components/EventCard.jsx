import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import '../App.css';

const Event = ({event, toUpdate, toDelete}) => {

    const onUpdate = (toUpdateEvent) => {
        toUpdate(toUpdateEvent)
    }

    const onDelete = (toDeleteEvent) => {
        toDelete(toDeleteEvent)
    }

    

    return (
        <div>
            <Card id="card">
                <Card.Body >
                    <table>
                        <tr>
                            <td>{event.eventname}</td>
                            <td>{event.eventdate}</td>
                            <td>{event.category}</td>
                            <td>{event.eventlocation}</td>
                            <td className="td-button"><Button variant="outline-info" onClick={()=>{onUpdate(event)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button></td>
                            <td className="td-button"><Button variant="outline-danger" onClick={()=>{onDelete(event)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button></td>
                    
                        </tr>

                    </table>

                </Card.Body>
            </Card>
        </div>
    )

}

export default Event;