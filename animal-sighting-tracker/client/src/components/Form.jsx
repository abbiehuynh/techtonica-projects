import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import './Form.css';

const MyForm = ({ onSaveSighting, editingSighting, onUpdateSighting }) => {

    // creates initial state of sighting
    const [sighting, setSighting] = useState(editingSighting || {
        id: 0,
        individual_seen: "",
        species: "",
        date_of_sighting: "",
        location_of_sighting: "",
        is_healthy: true,
        email: "",
        image_url: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleIndividualChange = (event) => {
        const individual_seen = event.target.value;
        setSighting((sighting) => ({ ...sighting, individual_seen }));

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
        setSighting({ 
            id: 0,
            individual_seen: "",
            species: "",
            date_of_sighting: "",
            location_of_sighting: "",
            is_healthy: true,
            email: "",
            image_url: "" 
        })
    }

    // //A function to handle the post request
    // const postStudent = (newStudent) => {
    //     return fetch("http://localhost:8080/api/students", {
    //         method: "POST",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(newStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             //console.log("From the post ", data);
    //             //I'm sending data to the List of Students (the parent) for updating the list
    //             onSaveStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };

    // //A function to handle the post request
    // const putStudent = (toEditStudent) => {
    //     return fetch(`http://localhost:8080/api/students/${toEditStudent.id}`, {
    //         method: "PUT",
    //         headers: { "Content-Type": "application/json" },
    //         body: JSON.stringify(toEditStudent),
    //     })
    //         .then((response) => {
    //             return response.json();
    //         })
    //         .then((data) => {
    //             onUpdateStudent(data);
    //             //this line just for cleaning the form
    //             clearForm();
    //         });
    // };


    //A function to handle the submit in both cases - Post and Put request!
    const handleSubmit = (e) => {
        e.preventDefault();
        if (sighting.id) {
            putSighting(sighting);
        } else {
            postSighting(sighting);
        }
    };

    return (
        <div className="form-container">
            <div className="form-page">
                <Form className='form-sighting' onSubmit={handleSubmit}>
                    <h2 id="add-sighting-header">Add New Sighting</h2>
                    <Form.Group>
                        <label className="form-label">Individual Seen</label>
                        <input
                            type="text"
                            id="add-individual-seen"
                            placeholder="Name of Individual"
                            required
                            value={sighting.individual_seen}
                            onChange={handleIndividualChange}
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
                    <Button type="submit" variant="outline-success">{sighting.id ? "Edit Sighting" : "Add Sighting"}</Button>
                    {sighting.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};


export default MyForm;