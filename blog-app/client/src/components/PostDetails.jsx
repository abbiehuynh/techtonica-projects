import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Post from './Post';
import Comments from './Comments';
import AddComment from './AddComment';
import './PostDetails.css';

const PostDetails = () => {
    const { id } = useParams();
    
    // this is my original state with an array of postdetails
    const [postDetails, setPostDetails] = useState(null);
    const [error, setError] = useState(null);

    // useState for style changes with hover effect
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        backgroundColor: isHovered ? '#eb8931' : 'aliceblue',
        color: isHovered ? 'aliceblue' : 'black',
        margin: '10px', 
        borderRadius:'25px', 
        padding: '8px',
        borderStyle: 'none'
    }

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
        <Link to="/">
            <button 
                className="return-btn"
                style={buttonStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >return home</button>
        </Link>
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
            <Comments postDetails={postDetails}/>
            {/* <ul>
                {comments.map((comments) => {
                    return <li key={postDetails.post_id}> <Comment postDetails={postDetails} /></li>
                })}
            </ul> */}
            <AddComment />

        </div>
    </div>
  )
}

export default PostDetails;