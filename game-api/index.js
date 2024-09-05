import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})