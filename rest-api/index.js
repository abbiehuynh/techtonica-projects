import express from "express";
import bodyParser from "body-parser";



const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// using node and express, create a GET router with a response that coverts all using JSON()
app.get("/", (req, res) => res.send("Hello from Homepage."));


let server = app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));



// using that endpoint, build a list of all pokemon in the backend(server side)

// using node and express, create a route for each one of the verbs in CRUD operations in backend

