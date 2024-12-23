# Project Name: Weather App

**Description:**
Curious what the weather is like in your city? Use this Weather App to check your city's current temperature, what temperature it actually feels like, and more! Using the Open Weather Map API, you can check your city's weather in real-time!

---

**Table of Contents**

[Introduction](#introduction)
[Installation](#installation)
[Usage](#usage)
[Demonstation](#demonstration)
[Features](#features)
[Technologies Used](#technologies-used)
[Acknowledgments](#acknowledgments)
[Contact](#contact)
---

## Introduction: 
**Project: Build a Minimal APP Connecting Backend & Frontend:**
Weekly Project for Week 7 of the Techtonica Software Engineer in Training Program

**Primary Learning Goals:**
This assignment will check for proficiency in: NodeJS, ExpressJS, and how connect your backend with the frontend, as well as the following:
- Connect to 3rd party API
- Showing data from an API call
- Create dynamic API requests with user input
- Parse JSON and display data using React
- Connecting data between Express and React
- Creating Express routes
- Creating React components and filling them with dynamic data
- Using callback functions to pass data from a child to parent component
- Learn how to use and modify code from a template


**Project Requirements**
- 15+ commits
- 1+ PR
- README with a visual of the project (i.e. gif, images, deployed version) and setup instructions
- OpenWeatherMap API
- Connected frontend and backend
- Contain at minimum city name, current weather icon, temperature, humidity, and wind speed
- Display the icon images for weather conditions such as sunny, rainy, cloudy, and snowy
- Responsive design
- Showcase you can implement the primary learning goals

## Installation: 
**To create the whole project**
1.  Go to your source directory in your terminal and clone the repository by running the command:

```
$ git clone https://github.com/abbiehuynh/techtonica-projects/weather-api.git <NameNewDirectory>
```
2. `npm install` in terminal in server (techtonica-projects/weather-api) and client (/weather-api/client).

3. `npm start` on server side and `npm run dev` on client side to run weather app.

4. Visit `http://localhost:3001` for server site (ExpressJS, NodeJS) and `http://localhost:5173` for client site (React + Vite).
   
6. Log in Using: Name: `Abbie` , Password: `password`

## Usage: 
- Input city name to choose city.
- Click button to generate city's weather data.
- Can continute to input new city names to generate a differen't city's weather information.
- Update 2.0:
    - log in to track favorite city
    - update favorite city

## Demonstration:

Once the page has loaded, you will see weather information for the city of Birmingham.
![Load Page](images/loadingpage-weatherapp.png)

You can input the city name that you would like to check the weather for. Once you have typed the city name, you can click on the "Get Weather" button to submit the city value.
![User Input](images/userinput-weatherapp.gif)

The weather data for that city input will then load on the page. 
![Get Weather](images/getWeather-weatherapp.png)

Updated Features for Weather App 2.0:
User can log in and add city as favorite city!
![App 2.0](./images/home-weatherapp2.0.png)


## Features: 
- Interactive user experience through mouse click
    - input city name and click "Get Weather" to generate city's temperature, description of weather, humidity, feel's like, and wind-speed.  
- Update 2.0:
    - also generates minimum and maximum temperatures
    - requires user to log in to access weather app
    - allows users to save city as favorite city
    - displays favorite city at the bottom of the web page
 - To include in the future:
    - allow users to register a new acoount
    - save multiple cities
    - include a full week forecast 


## Technologies: 
- ExpressJS, NodeJS
- React + Vite  
- Postman     
- HTML, CSS
- Git
- Fetch

## Acknowledgments:
Specials thanks to Techtonica Program & Staff, my mentor, and the H2 2024 Cohort. Thank you for your continuous love and support for growth through this tech journey. 

## Contact: 
- [Github](https://github.com/abbiehuynh)
- [LinkedIn](https://www.linkedin.com/in/abbie-huynh/)
- email: abbiehuynhh@gmail.com
- [Project Link: Weather App](https://github.com/abbiehuynh/techtonica-projects/tree/weather-api)
