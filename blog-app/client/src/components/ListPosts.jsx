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
    const onDelete = async (post) => {
        console.log("Post object:", post);

        // validates post id
        if (!post.post_id) {
            console.error("Post ID is undefined");
            alert("Post ID is missing");
            return;
        }

        try {
            const response = await fetch(`http://localhost:3001/postdetails/${post.post_id}`, {
                method: "DELETE"  
        });

        if (response.ok) {
            console.log("Post deleted successfully");
            loadPosts();
        } else {
            const errorData = await response.json();
            console.error("Error deleting post:", errorData.error);
            alert("Failed to delete post: " + errorData.error);
        }
    } catch (error) {
        console.error("Error with delete request:", error);
        alert("An error occured while trying to delete the post.");
    }
};

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