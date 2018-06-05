import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';
import {SUN,SNOW,RAIN,CLOUDY,THUNDER,DRIZZLE} from '../../constants/Weathers';


const stateToIconName = weatherState => {
  switch (weatherState) {
    case CLOUDY:
      return "cloudy";
    case SUN:
      return "day-sunny";
    case SNOW:
      return "snow";
    case RAIN:
      return "rain";
    case THUNDER:
      return "day-thunderstorm";
    case DRIZZLE:
      return "day-showers";
    default:
      return "day-sunny";
  }
}


const getWeatherIcon = (weatherState) => {
        return(<WeatherIcons name={stateToIconName(weatherState)} size="3x" color="#ff8a80"/>);
};

const WeatherTemperature = (props) => {
  const temperature = props.temperature;
  const weatherState = props.weatherState;

  return(
    <div>
      <span>{getWeatherIcon(weatherState)}</span>
      <div className="style-temperature">{`${temperature}Cº`}</div>
    </div>);
  };


WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
}

export default WeatherTemperature;
