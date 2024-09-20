import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Sightings from './Sightings';
import './Sightings.css';

const ListSightings = () => {

    // this is my original state with an array of students 
    const [sightings, setSightings] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingSightings, setEditingSightings] = useState(null)

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

    // const onSaveStudent = (newStudent) => {
    //     //console.log(newStudent, "From the parent - List of Students");
    //     setStudents((students) => [...students, newStudent]);
    // }


    // //A function to control the update in the parent (student component)
    // const updateStudent = (savedStudent) => {
    //     // console.log("Line 29 savedStudent", savedStudent);
    //     // This function should update the whole list of students - 
    //     loadStudents();
    // }

    // //A function to handle the Delete funtionality
    // const onDelete = (student) => {
    //     //console.log(student, "delete method")
    //     return fetch(`http://localhost:8080/api/students/${student.id}`, {
    //         method: "DELETE"
    //     }).then((response) => {
    //         //console.log(response);
    //         if (response.ok) {
    //             loadStudents();
    //         }
    //     })
    // }

    // //A function to handle the Update functionality
    // const onUpdate = (toUpdateStudent) => {
    //     //console.log(toUpdateStudent);
    //     setEditingStudent(toUpdateStudent);

    // }



    return (
        <div className="sightings-container">
        <div className="list-sightings">
            <h2 id="sightings-tracking-header"> Sightings </h2>
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '20px', paddingTop: '20px'}}>
                {sightings.map((sightings) => {
                    return <li key={sightings.id}> <Sightings sightings={sightings} /></li>
                })}
                {/* toDelete={onDelete} toUpdate={onUpdate} */}
            </ul>
        </div>
        <button id="add-sighting-btn">Add Sighting</button>
        {/* <MyForm key={editingStudent ? editingStudent.id : null} onSaveStudent={onSaveStudent} editingStudent={editingStudent} onUpdateStudent={updateStudent} /> */}
        </div>
    );
}


export default ListSightings;