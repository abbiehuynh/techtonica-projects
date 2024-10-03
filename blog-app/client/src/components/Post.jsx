import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'
import { Link } from 'react-router-dom';
import './Post.css';

const Post = ({post, toUpdate, toDelete}) => {

    const onUpdate = (toUpdatePost) => {
        toUpdate(toUpdatePost)
    }

    const onDelete = (toDeletePost) => {
        toDelete(toDeletePost)
    }

    return (
        <Card>
            <Card.Body>
            <Card.Title>{post.title}</Card.Title>
            <Card.Subtitle>{post.post_author}</Card.Subtitle>
            <Card.Text style={{height: '50px'}}>{post.post_content}</Card.Text>
            <Link to={`/posts/${post.post_id}`}>
            <Button style={{padding: '0.6em', marginRight: '0.9em', marginBottom: '1.2em'}}>Read More..</Button>
            </Link>
            <Button variant="outline-danger" onClick={()=>{onDelete(post)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(post)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button>
            </Card.Body>
        </Card>
    )

}

export default Post;