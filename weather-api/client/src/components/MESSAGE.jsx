import { useState } from 'react';

// when the form is submitted, this "message" will appear
// the message includes the following states: 
    // city name
    // current weather icon
    // temperature
    // humidity
    // wind speed

    // or instead of states, can i pass these as key value pairs in an object? in one state


const MESSAGE = () => {
    const [message, setMessage] = useState('');
    const [city, setCity] = useState('');
    const [icon, setIcon] = useState('');
    const [temp, setTemp] = useState('');
    const [humidity, setHumidity] = useState('');
    const [windSpeed, setWindSpeed] = useState('');
}


export default MESSAGE;