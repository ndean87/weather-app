import React from 'react'


function ShowWeather({ weather }){

  const showTheWeather = () => {
    return (
      <li
        className="weather-details"
      >
        <div>
          Todays Weather in {weather.display_location && weather.display_location.city} is: <strong>{weather.weather}</strong>
        </div>
        <div className="img-div">
          <img src={weather.icon_url}/>
        </div>
        <div>Temperature: <strong>{weather.temperature_string}</strong></div>
        <div>Wind Conditions: <strong>{weather.wind_string}</strong></div>
        <div>Humidity: <strong>{weather.relative_humidity}</strong></div>
      </li>
    )
  }


  return(
    <div className="current-weather">
      {showTheWeather()}
    </div>
  )
}

export default ShowWeather;
