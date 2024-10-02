import React from 'react';
import { useParams } from 'react-router-dom';
import './PostDetails.css'

const PostDetails = () => {
    const { id } = useParams();
    
  return (
    <div className="postDetails">
        <p id="quote" style={{textAlign: "center"}}>your daily dose of pet mail</p>
        <div className="post">
            Blog Post
        </div>
        <br/>
        <div className="comments">
            Comment Section

        </div>
    </div>
  )
}

export default PostDetails;