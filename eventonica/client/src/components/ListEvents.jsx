import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import myForm from './Form.jsx';
import Event from './EventCard.jsx';

const ListEvents = () => {

    // creating initial useState for events
    const [events, setEvents] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingEvent, setEditingEvent] = useState(null)

    const loadEvents = () => {
        // A function to fetch the list of events that will be load anytime that list change
        fetch("http://localhost:5050/api/events")
            .then((response) => response.json())
            .then((events) => {
                setEvents(events);
            });
    }

    useEffect(() => {
        loadEvents();
    }, [events]);

    // const onSaveEvent = (newEvent) => {
    //     //console.log(newEvent, "From the parent - List of Events");
    //     setEvents((Events) => [...Events, newEvent]);
    // }


    // //A function to control the update in the parent (student component)
    // const updateEvent = (savedEvent) => {
    //     // console.log("Line 29 savedEvent", savedEvent);
    //     // This function should update the whole list of events - 
    //     loadEvents();
    // }

    // //A function to handle the Delete funtionality
    // const onDelete = (event) => {
    //     //console.log(event, "delete method")
    //     return fetch(`http://localhost:5050/api/events/${event.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadEvents();
    //         }
    //     })
    // }

    // //A function to handle the Update functionality
    // const onUpdate = (toUpdateEvent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingEvent(toUpdateEvent);

    // }



    return (
        <div className="mybody">
        <div className="list-events">
            <h2>Events </h2>
            <ul>
                {events.map((event) => {
                    return <li key={event.id}> <Event event={event} /></li>
                })}
            </ul>
        </div>
        {/* <myForm key={editingEvent ? editingEvent.id : null} onSaveEvent={onSaveEvent} editingEvent={editingEvent} onUpdateEvent={updateEvent} /> */}
        </div>
    );
}

{/*toDelete={onDelete} toUpdate={onUpdate} */}

export default ListEvents;