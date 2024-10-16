import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import * as ioicons from 'react-icons/io5'

const Comments = ({postDetails}) => {
  return (
    <div>
        <h1>Comments</h1>
        <Card>
            <Card.Body>
            <Card.Title>{postDetails.comment_author}</Card.Title>
            <Card.Text>{postDetails.comment_content}</Card.Text>
            {/* <Button variant="outline-danger" onClick={()=>{onDelete(post)}} style={{padding: '0.6em', marginRight:'0.9em'}}><ioicons.IoTrash/></Button>
            <Button variant="outline-info" onClick={()=>{onUpdate(post)}} style={{padding: '0.6em'}}> <ioicons.IoSync/></Button> */}
            </Card.Body>
        </Card>


    </div>
    
  )
}

export default Comments