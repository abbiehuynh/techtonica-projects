import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Post from './Post';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    
    // this is my original state with an array of postdetails
    const [postDetails, setPostDetails] = useState(null);
    const [error, setError] = useState(null);

    // //this is the state needed for the UpdateRequest
    // const [editingPostDetails, setEditingPostDetails] = useState(null)


    useEffect(() => {
        const loadPostDetails = async () => {
            try {
                const response = await fetch(`http://localhost:3001/posts/${id}`)
                if (!response.ok) throw new Error('Response not okay')
                const postDetails = await response.json();
                    setPostDetails(postDetails[0]);
                    console.log(postDetails); // checks what is being fetched
                } catch (error) {
                    setError(error.message);
                }
        }
        loadPostDetails();
    }, [id]);

    if (error) return <p> Error: {error}</p>;
    if (!postDetails) return <p>Post Not Found</p>;

  return (
    <div className="postDetails">
        <button className="return-btn">return home</button>
        {/* <p id="quote" style={{textAlign: "center"}}>your daily dose of pet mail</p> */}
        <div style={{backgroundColor:'#C4A88D'}}>
        <img src={postDetails.image_url} style={{display:'block', height:'400px', margin:'auto'}}/>
        </div>
        <div className="post">
        {/* could make this into a component, or find a way to reuse post component */}
            Blog Post
            <h1>{postDetails.title}</h1>
            <h2>Written By: {postDetails.post_author}</h2>
            <p>{postDetails.post_content}</p>
            <p></p>
        </div>
        <br/>
        {/* in the future, make a comments component */}
        <div className="comments">
            <h1>Comments</h1>
            <div>
            <h3>{postDetails.comment_author}</h3>
            <p>{postDetails.comment_content}</p>
            </div>
            {/* <ul>
                {postDetails.comments.map(comment => {
                    <li key={comment.id}>
                        <strong>{comment.author}</strong>: {comment.content}
                    </li>
                })}
            </ul> */}

        </div>
    </div>
  )
}

export default PostDetails;