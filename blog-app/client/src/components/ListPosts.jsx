import React, { useState, useEffect } from 'react'
import * as ioicons from 'react-icons/io5'
import MyForm from './Form';
import './Form.css';
import Post from './Post';

const ListPosts = () => {

    // this is my original state with an array of posts 
    const [posts, setPosts] = useState([]);

    //this is the state needed for the UpdateRequest
    const [editingPost, setEditingPost] = useState(null)

    const loadPosts = () => {
        fetch("http://localhost:3001/postdetails")
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            });
    }

    useEffect(() => {
        loadPosts();
    }, [posts]);

    const onSavePost = (newPost) => {
        setPosts((posts) => [...posts, newPost]);
    }

    //A function to control the update in the parent (post component)
    const updatePost = (savedPost) => {
        loadPosts();
    }

    //A function to handle the Delete funtionality
    const onDelete = (post) => {
        return fetch(`http://localhost:3001/posts${post.id}`, {
            method: "DELETE"
        }).then((response) => {
            //console.log(response);
            if (response.ok) {
                loadPosts();
            }
        })
    }

    //A function to handle the Update functionality
    const onUpdate = (toUpdatePost) => {
        setEditingPost(toUpdatePost);

    }

    return (
        <div className="mybody">
        <div className="list-posts">
            <h2> PetPosts </h2>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}> <Post post={post} toDelete={onDelete} toUpdate={onUpdate} /></li>
                })}
            </ul>
        </div>
        <MyForm key={editingPost ? editingPost.id : null} onSavePost={onSavePost} editingPost={editingPost} onUpdatePost={updatePost} />
        </div>
    );
}


export default ListPosts;