import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import './Form.css'

const myForm = ({ onSaveEvent, editingEvent, onUpdateEvent, closeForm }) => {

    // This is the original State with not initial event
    const [event, setEvent] = useState(editingEvent || {
        id: 0,
        eventname: "",
        category: "", 
        eventdate: null,
        eventtime: null,
        eventlocation: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleEventChange = (event) => {
        const eventname = event.target.value;
        setEvent((event) => ({ ...event, eventname }));

    };

    const handleDateChange = (event) => {
        const date = event.target.value;
        setEvent((event) => ({ ...event, eventdate }));
    };

    const handleCategoryChange = (event) => {
        const category = event.target.value;
        setEvent((event) => ({ ...event, category }));
    };

    const handleLocationChange = (event) => {
        const eventlocation = event.target.value;
        setEvent((event) => ({ ...event, eventlocation }));
    };

    const clearForm = () => {
        setEvent({ eventname: "" })
    }

    //A function to handle the post request
    const postEvent = (newEvent) => {
        return fetch("http://localhost:5050/api/events", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                onSaveEvent(data);
                // clears the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putEvent = (toEditEvent) => {
        return fetch(`http://localhost:5050/api/events/${toEditEvent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditEvent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateEvent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (event.id) {
            putEvent(event);
        } else {
            postEvent(event);
        }
        closeForm();
    };

    return (
        <div className='form-container'>
            <div className='form-page'>
                <Form className='form-events' onSubmit={handleSubmit}>
                    <h2 id="add-event-header">Add New Event</h2>
                    <Form.Group>
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            id="add-event-name"
                            placeholder="Event Name"
                            required
                            value={event.eventname}
                            onChange={handleEventChange}
                        />
                    </Form.Group>
                    {/* <Form.Group>
                        <label className="form-label">Date</label>
                        <input
                            type="text"
                            id="add-date"
                            placeholder="YYYY-DD-MM"
                            required
                            value={event.date}
                            onChange={handleDateChange}
                        />
                    </Form.Group> */}
                    <Form.Group>
                        <label className="form-label">Category</label>
                        <input
                            type="text"
                            id="add-category"
                            placeholder="Category"
                            required
                            value={event.category}
                            onChange={handleCategoryChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <label className="form-label">Location</label>
                        <input
                            type="text"
                            id="add-location"
                            placeholder="Location"
                            required
                            value={event.eventlocation}
                            onChange={handleLocationChange}
                        />
                    </Form.Group>

                    <Form.Group>
                    <Button id="submit-btn" type="submit" variant="outline-success">{event.id ? "Edit Event" : "Add Event"}</Button>
                    {event.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};


export default myForm;