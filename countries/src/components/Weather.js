import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({location}) => {

    const [ weather , setWeather] = useState(null)
    const [time, setTime] = useState(null)

    const api_key_weather = process.env.REACT_APP_WEATHER
    const urlWeather = `https://api.weatherapi.com/v1/current.json?key=${api_key_weather}&q=${location}`



   useEffect(() => {
        axios.get(urlWeather).then(response => {
            setWeather(response.data)
            setTime(response.data.location.localtime)
        })
      
    }, []) 


    if(!weather || !time) {
        return (
            <div>
                <p>loading...</p>
            </div>
        )
    } else {

        return (
            <div>
                <p>Currently in <strong>{location} </strong> is <strong>{time.split(" ").pop()}</strong></p>
                <h1>{weather.current.temp_c} &#8451;</h1> 
                <img src={`${weather.current.condition.icon}`}></img>
                              
            </div>
        )
    }

  }



export default Weather