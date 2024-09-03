import { useState, useEffect } from 'react';

// will initially appear on page
// will include:
    // text: "What the Weather is like in..."
    // input (placeholder: enter city name)
    // button (to submit form), submit

const url =`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${apiKey}`;
const apiKey = process.env.API_KEY;

const FORM = () => {
    const [submit, setSubmit] = useState('');
    const [city, setCity] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');

    useEffect(() => {
        const fetchWeather = async () => {
            const result = await fetch(url)
            result.json().then(json => {
                setTemp(json.current.temp_f);
            })
        }
        fetchWeather();
    }, []);
}

export default FORM;