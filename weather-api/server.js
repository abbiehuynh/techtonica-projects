import express from "express";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5050;

app.use(bodyParser.json());

// api key
const apiKey = process.env.API_KEY;

// route for homepage
app.get('/', (req, res) => {
    res.send({introduction: "What the Weather is like in..."});
});

// get route to retrieve data from Weather API
app.get('/weather', (req, res) => {
    const city = req.query.cityName;
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
    console.log(url);
    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            res.send({ data });
        })
        .catch((err) => {
            console.log(err);
        });
})



// app.get('/api', async (req, res) => {
//     try {
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