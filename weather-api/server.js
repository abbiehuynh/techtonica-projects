import express from "express";
import bodyParser from 'body-parser';

const app = express()
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());

// api key
const apiKey = '75be0a69455443f745330dd9cb44f7ae';

// route for homepage
app.get('/', (req, res) => {
    res.send("Welcome to Abbie's Weather App");
});

// get route to retrieve data from Weather API
// app.get('/weather', async (req, res) => {
//     try {
//         const apiKey = '75be0a69455443f745330dd9cb44f7ae';
//         const city = 'city';
//         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//         const response = await fetch(url, {
//             headers: {
//                 "Authorization:" `Bearer ${apiKey}`
//             }
//         });
//         console.log(response)

//         const data = await response.json();
//         res.send(data);
//     } catch (error) {
//         console.error("Error fetching weather data: ", Error.message);
//     }
// });

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
})