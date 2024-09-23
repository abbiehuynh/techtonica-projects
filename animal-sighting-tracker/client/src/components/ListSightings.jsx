import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Sightings from './Sightings';
import './Sightings.css';

const ListSightings = () => {

    // this is my original state with an array of students 
    const [sightings, setSightings] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingSighting, setEditingSighting] = useState(null)

    const loadSightings = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:3001/species/sightings")
            .then((response) => response.json())
            .then((sightings) => {
                setSightings(sightings);
            });
    }

    useEffect(() => {
        loadSightings();
    }, [sightings]);

    const onSaveSighting = (newSighting) => {
        //console.log(newSighting, "From the parent - List of Sightings");
        setSightings((sightings) => [...sightings, newSighting]);
    }


    //A function to control the update in the parent (student component)
    const updateSighting = (savedSighting) => {
        // This function should update the whole list of sightings - 
        loadSightings();
    }

    //A function to handle the Delete funtionality
    const onDelete = (sighting) => {
        //console.log(student, "delete method")
        return fetch(`http://localhost:3001/species/sightings/${sightings.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadSightings();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdateSighting) => {
        setEditingSighting(toUpdateSighting);

    }

    const [uploadForm, setUploadForm] = useState(false);

    return (
        <div className="sightings-container">
        <div className="list-sightings">
            <h2 id="sightings-tracking-header"> Sightings </h2>
            <button id="filter-btn">filter</button>
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '20px', paddingTop: '20px'}}>
                {sightings.map((sightings) => {
                    return <li key={sightings.id}> <Sightings sightings={sightings} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
                {/* toDelete={onDelete} toUpdate={onUpdate} */}
            </ul>
        </div>
        <button id="add-sighting-btn" onClick={() => setUploadForm(true)}
        >Add Sighting</button>
        {uploadForm && <MyForm 
            key={editingSighting ? editingSighting.id : null} 
            onSaveSighting={onSaveSighting} 
            editingSighting={editingSighting} 
            onUpdateSighting={updateSighting}
            closeForm ={() => {setUploadForm(false)}}
        />}
        </div>
    );
}


export default ListSightings;