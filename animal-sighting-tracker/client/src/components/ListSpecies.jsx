import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import Species from './Species';
import './Species.css';

const ListSpecies = () => {

    // this is my original state with an array of students 
    const [species, setSpecies] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingSpecies, setEditingSpecies] = useState(null)

    const loadSpecies = () => {
        // A function to fetch the list of students that will be load anytime that list change
        fetch("http://localhost:3001/species")
            .then((response) => response.json())
            .then((species) => {
                setSpecies(species);
            });
    }

    useEffect(() => {
        loadSpecies();
    }, [species]);

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
        <div className="species-container">
        <div className="list-species">
            <h2 id="species-tracking-header"> Species Tracking </h2>
            <ul style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '20px', paddingTop: '20px'}}>
                {species.map((species) => {
                    return <li key={species.id}> <Species species={species} /></li>
                    // toDelete={onDelete} toUpdate={onUpdate}
                })}
            </ul>
        </div>
        {/* <MyForm key={editingSpecies ? editingSpecies.id : null} onSaveSpecies={onSaveSpecies} editingSpecies={editingSpecies} onUpdateSpecies={updateSpecies} /> */}
        </div>
    );
}


export default ListSpecies;