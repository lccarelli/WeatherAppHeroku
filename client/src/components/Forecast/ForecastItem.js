import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import WeatherData from '../WeatherData';




const ForecastItem = ({weekDay, hour, data}) => (
  <div>
    <div className="weather-data-container">
      <Grid container spacing={8} className="forecast-container">
        <Grid item xs={4} className="date-weather">
          <div className="dia-weather">{`Día: ${weekDay}`}</div>
          <div className="dia-weather">{`Hora: ${hour} hs`}</div>
        </Grid>
        <Grid item xs={8} >
          <WeatherData data={data}></WeatherData>
        </Grid>
      </Grid>
    </div>
      <Divider className="line-divider"/>
  </div>
);


ForecastItem.propTypes = {
  weekDay: PropTypes.string.isRequired,
  hour: PropTypes.number.isRequired,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}
export default ForecastItem;
