import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';

import WeatherTemperature from './WeatherTemperature';
import WeatherExtraInfo from './WeatherExtraInfo';



const WeatherData = ({data}) => {

  const {temperature, weatherState, humidity, wind} = data;

  return(
      <div>
        <Grid container spacing={8}>
          <Grid item xs={6} className="weather-temperature">
            <WeatherTemperature
              temperature={temperature}
              weatherState={weatherState}
            />
        </Grid>
        <Grid item xs={6} className="weather-extrainfo">
            <WeatherExtraInfo
              humidity={humidity}
              wind={wind}
            />
        </Grid>
      </Grid>
      </div>
    );
};

WeatherData.propTypes = {
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

export default WeatherData;
