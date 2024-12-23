const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const path = require('path');
const db = require('./db/db-connection.js');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// creates an endpoint for the route "/""
app.get('/', (req, res) => {
    res.json({ message: 'Hello from ExpressJS with React-Vite' });
});

// create the get request for posts in the endpoint '/posts'
app.get('/posts', async (req, res) => {
    try {
        const { rows: posts } = await db.query('SELECT * FROM posts');
        res.send(posts);
    } catch (error) {
        console.error("Error fetching posts data", error );
        return res.status(400).json({ error });
    }
});

// create the get request for comments in the endpoint '/comments'
app.get('/comments', async (req, res) => {
    try {
        const { rows: comments } = await db.query('SELECT * FROM comments');
        res.send(comments);
    } catch (error) {
        console.error("Error fetching posts data", error );
        return res.status(400).json({ error });
    }
});

// create the get request for postdetails in the endpoint '/postdetails' 
app.get('/postdetails', async (req, res) => {
    try {
        const { rows: postdetails } = await db.query(
            `SELECT 
                p.id AS post_id,
                p.author AS post_author,
                p.title,
                p.content AS post_content,
                c.id AS comment_id,
                c.author AS comment_author,
                c.content AS comment_content
            FROM public.posts p
            LEFT JOIN public.comments c ON p.id = c.post_id;`
        );
        res.send(postdetails);
    } catch (error) {
        console.error("Error fetching posts data", error );
        return res.status(400).json({ error });
    }
});

// get request for post details by id
app.get('/posts/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        const { rows: postDetailsById } = await db.query(
            `SELECT 
                p.id AS post_id,
                p.author AS post_author,
                p.title,
                p.image_url,
                p.content AS post_content,
                c.id AS comment_id,
                c.author AS comment_author,
                c.content AS comment_content
            FROM public.posts p
            LEFT JOIN public.comments c ON p.id = c.post_id
            WHERE p.id = $1;`, [postId]
        );
        res.send(postDetailsById);
    } catch (error) {
        console.error("Error fetching posts details by id data", error );
        return res.status(400).json({ error });
    }
});


// create the POST request
app.post('/postdetails', async (req, res) => {
    try {
        const newPost = {
            author: req.body.author,
            title: req.body.title,
            content: req.body.content
        };
        const result = await db.query(
            'INSERT INTO posts(author, title, content) VALUES($1, $2, $3) RETURNING *',
            [newPost.author, newPost.title, newPost.content],
        );
        console.log(result.rows[0]);
        res.json(result.rows[0]);

    } catch (error) {
        console.error("Error making post request", error );
        return res.status(400).json({ error });
    }
});

// delete request for posts
app.delete('/postdetails/:postId', async (req, res) => {
    try {
        const postId = req.params.postId;
        await db.query('DELETE FROM posts WHERE id=$1', [postId]);
        console.log("From the delete request-url", postId);
        res.status(200).end();
    } catch (error) {
        console.error("Error with completing delete request", error );
        return res.status(400).json({ error });

    }
});

// //A put request - Update a student 
// app.put('/api/students/:studentId', async (req, res) =>{
//     //console.log(req.params);
//     //This will be the id that I want to find in the DB - the student to be updated
//     const studentId = req.params.studentId
//     const updatedStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname, iscurrent: req.body.is_current}
//     console.log("In the server from the url - the student id", studentId);
//     console.log("In the server, from the react - the student to be edited", updatedStudent);
//     // UPDATE students SET lastname = "something" WHERE id="16";
//     const query = `UPDATE students SET firstname=$1, lastname=$2, is_current=$3 WHERE id=${studentId} RETURNING *`;
//     const values = [updatedStudent.firstname, updatedStudent.lastname, updatedStudent.iscurrent];
//     try {
//       const updated = await db.query(query, values);
//       console.log(updated.rows[0]);
//       res.send(updated.rows[0]);
  
//     }catch(e){
//       console.log(e);
//       return res.status(400).json({e})
//     }
//   })


// create request for text summarization endpoint
    // fetch from AI 
    // create variable text for req.body


// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Blog App Server listening on ${PORT}`);
});