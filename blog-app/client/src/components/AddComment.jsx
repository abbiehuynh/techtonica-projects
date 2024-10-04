import React from 'react'
import { Button, Form } from "react-bootstrap"

const AddComment = () => {
  return (
    <div style={{paddingTop:'20px'}}>
        <Form className='form-comments' >
            <Form.Group className='form-group'>
                <h2 id="create-comment-header">Add a Comment</h2>
                <Form.Label className='form-label' style={{marginLeft: '10px'}}>Name</Form.Label>
                <input
                    type="text"
                    id="add-name"
                    placeholder="Your Name"
                    required
                    // value={postDetails.comment_author}
                    // onChange={handleCommentNameChange}
                    style={{borderRadius: '20px', padding: '10px'}}
                />
            </Form.Group>
            <Form.Group className='form-group'>
                <Form.Label className='form-label' style={{marginLeft: '10px'}}>Comment</Form.Label>
                <input
                    type="text"
                    id="add-comment"
                    placeholder="Your Comment"
                    required
                    // value={postDetails.comment_content}
                    // onChange={handleCommentChange}
                    style={{borderRadius: '20px', padding: '10px'}}
                />
            </Form.Group>

            <Form.Group>
                {/* post request to comments db */}
                <Button
                    type="submit"
                    >Add Comment
                </Button>
            </Form.Group>
            
            {/* <Form.Group>
            <Button type="submit" variant="outline-success">{PostDetails.comment_id ? "Edit Post" : "Add Post"}</Button>
            {PostDetails.comment_id ? <Button type="button" variant="outline-warning" onClick={clearForm}>Cancel</Button> : null}
            </Form.Group> */}
        </Form>

    </div>
  )
}

export default AddComment;