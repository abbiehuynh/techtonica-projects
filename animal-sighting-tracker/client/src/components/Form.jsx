import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import './Form.css';

const MyForm = ({ onSaveSighting, editingSighting, onUpdateSighting }) => {

    // creates initial state of sighting
    const [sighting, setSighting] = useState(editingSighting || {
        individual_seen: "",
        species: "",
        date_of_sighting: "",
        location_of_sighting: "",
        is_healthy: false,
        email: "",
        image_url: ""
    });

    //create functions that handle the event of the user typing into the form
    // individual name
    const handleIndividualChange = (event) => {
        const individual_seen = event.target.value;
        setSighting((sighting) => ({ ...sighting, individual_seen }));

    };

    // spcecies name
    const handleSpeciesChange = (event) => {
        const species = event.target.value;
        setSighting((sighting) => ({ ...sighting, species }));
    };

    // date of sighting
    const handleDateChange = (event) => {
        const date_of_sighting = event.target.value;
        setSighting((sighting) => ({ ...sighting, date_of_sighting }));
    };

    // location of sighting
    const handleLocationChange = (event) => {
        const location_of_sighting = event.target.value;
        setSighting((sighting) => ({ ...sighting, location_of_sighting }));
    };

    // is healthy
    const handleHealthyChange = (event) => {
        const is_healthy = event.target.checked;
        //console.log(iscurrent);
        setSighting((sighting) => ({ ...sighting, is_healthy }));
    };

    // email 
    const handleEmailChange = (event) => {
        const email = event.target.value;
        setSighting((sighting) => ({ ...sighting, email }));
    };

     // image url
     const handleImageChange = (event) => {
        const image_url = event.target.value;
        setSighting((sighting) => ({ ...sighting, image_url }));
    };

    const clearForm = () => {
        setSighting({ 
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
                    <p id="form-text">Please fill out the following information <br/> to record your sighting!</p>
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
                    <Form.Group>
                        <label className="form-label">Species of Individual</label>
                        <input
                            type="text"
                            id="add-species"
                            placeholder="Species Name"
                            required
                            value={sighting.species}
                            onChange={handleSpeciesChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <label className="form-label">Date of Sighting</label>
                        <input
                            type="text"
                            id="add-date-of-sighting"
                            placeholder="MM/DD/YYYY"
                            required
                            value={sighting.date_of_sighting}
                            onChange={handleDateChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <label className="form-label">Location of Sighting</label>
                        <input
                            type="text"
                            id="add-location-of-sighting"
                            placeholder="Location"
                            required
                            value={sighting.location_of_sighting}
                            onChange={handleLocationChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <label className="form-label">Image of Individual</label>
                        <input
                            type="text"
                            id="add-image"
                            placeholder="Image URL"
                            required
                            value={sighting.image_url}
                            onChange={handleImageChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type={'checkbox'}
                        id={`isHealthy`}
                        checked={sighting.is_healthy}
                        onChange={handleHealthyChange}
                        label={`Is the Individual Healthy?`}
                    />
                    <Form.Group>
                    <Form.Group>
                        <label className="form-label">Ranger Contact Information</label>
                        <input
                            type="text"
                            id="add-email"
                            placeholder="Email"
                            required
                            value={sighting.email}
                            onChange={handleEmailChange}
                        />
                    </Form.Group>
                    <Button id="submit-btn" type="submit" variant="outline-success">{sighting.id ? "Edit Sighting" : "Add Sighting"}</Button>
                    {sighting.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
};


export default MyForm;