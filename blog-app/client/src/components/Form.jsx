import React, { useState, useEffect } from 'react'
import { Button, Form } from "react-bootstrap"
import './Form.css'

const MyForm = ({ onSavePost, editingPost, onUpdatePost }) => {

    // This is the original State 
    const [post, setPost] = useState(editingPost || {
        author: "",
        title: "",
        content: ""
    });

    //create functions that handle the event of the user typing into the form
    const handleAuthorChange = (event) => {
        const author = event.target.value;
        setPost((post) => ({ ...post, author }));
    };

    const handleTitleChange = (event) => {
        const title = event.target.value;
        setPost((post) => ({ ...post, title }));
    };

    const handleContentChange = (event) => {
        const content = event.target.value;
        setPost((post) => ({ ...post, content }));
    };

   
    const clearForm = () => {
        setPost({ author: "", title: "", content: ""})
    }

    //A function to handle the post request
    const postPost = (newPost) => {
        return fetch("http://localhost:3001/postdetails", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost),
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //console.log("From the post ", data);
                onSavePost(data);
                //this line just for cleaning the form
                clearForm();
            });
    };

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
        if (post.id) {
            putPost(post);
        } else {
            postPost(post);
        }
    };

    return (
        <Form className='form-posts' onSubmit={handleSubmit}>
            <Form.Group className='form-group'>
                <h2 id="create-post-header">Create a Post</h2>
                <Form.Label className='form-label' style={{marginLeft: '10px'}}>Author</Form.Label>
                <input
                    type="text"
                    id="add-author"
                    placeholder="Your Name"
                    required
                    value={post.author}
                    onChange={handleAuthorChange}
                    style={{borderRadius: '20px', padding: '10px'}}
                />
            </Form.Group>
            <Form.Group className='form-group'>
                <Form.Label className='form-label' style={{marginLeft: '10px'}}>Title</Form.Label>
                <input
                    type="text"
                    id="add-title"
                    placeholder="Title Name"
                    required
                    value={post.title}
                    onChange={handleTitleChange}
                    style={{borderRadius: '20px', padding: '10px'}}
                />
            </Form.Group>
            <Form.Group className='form-group'>
                <Form.Label className='form-label' style={{marginLeft: '10px'}}>Content</Form.Label>
                <input
                    type="text"
                    id="add-content"
                    placeholder="Content"
                    required
                    value={post.content}
                    onChange={handleContentChange}
                    style={{height: '200px', borderRadius: '20px', padding: '10px'}}
                />
            </Form.Group>
            
            <Form.Group>
            <Button type="submit" variant="outline-success">{post.id ? "Edit Post" : "Add Post"}</Button>
            {post.id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group>
        </Form>
    );
};


export default MyForm