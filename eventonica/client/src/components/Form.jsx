import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"

const myForm = ({ onSaveEvent, editingEvent, onUpdateEvent }) => {

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

    // const handleLastnameChange = (event) => {
    //     const lastname = event.target.value;
    //     setStudent((student) => ({ ...student, lastname }));
    // };

    // const handleCheckChange = (event) => {
    //     const is_current = event.target.checked;
    //     //console.log(iscurrent);
    //     setStudent((student) => ({ ...student, is_current }));
    // };

    const clearForm = () => {
        setEvent({ eventname: "" })
    }

    //A function to handle the post request
    const postStudent = (newStudent) => {
        return fetch("http://localhost:8080/api/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                //I'm sending data to the List of Students (the parent) for updating the list
                onSaveStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

    //A function to handle the post request
    const putStudent = (toEditStudent) => {
        return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(toEditStudent),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                onUpdateStudent(data);
                //this line just for cleaning the form
                clearForm();
            });
    };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (student.id) {
            putStudent(student);
        } else {
            postStudent(student);
        }
    };

    return (
        <Form className='form-events' onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Event Name</Form.Label>
                <input
                    type="text"
                    id="add-event-name"
                    placeholder="Event Name"
                    required
                    value={event.eventname}
                    onChange={handleNameChange}
                />
            </Form.Group>
            {/* <Form.Group>
                <Form.Label>Last Name</Form.Label>
                <input
                    type="text"
                    id="add-user-lastname"
                    placeholder="Last Name"
                    required
                    value={student.lastname}
                    onChange={handleLastnameChange}
                />
            </Form.Group>
            <Form.Check
                type={'checkbox'}
                id={`isCurrent`}
                checked={student.is_current}
                onChange={handleCheckChange}
                label={`Are they in the current program?`}
            /> */}
            <Form.Group>
            <Button type="submit" variant="outline-success">{student.id ? "Edit Student" : "Add Student"}</Button>
            {student.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default myForm;