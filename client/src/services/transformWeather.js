import {SUN,SNOW,RAIN,CLOUDY,THUNDER,DRIZZLE} from '../constants/Weathers';

const getWeatherState = weather => {
  const { id } = weather[0];

  if ( id < 300 ){
    return THUNDER;
  }else if ( id < 400) {
    return DRIZZLE;
  }else if ( id < 600 ) {
    return RAIN;
  }else if ( id < 700 ) {
    return SNOW;
  }else if ( id === 800 ) {
    return SUN;
  }else {
    return CLOUDY;
  }
}

const transformWeather = weatherdata => {
  const {weather} = weatherdata;
  const {humidity, temp} = weatherdata.main;
  const {speed} = weatherdata.wind;
  const weatherState = getWeatherState(weather);

  const data = {
    humidity,
    temperature:temp,
    wind:`${speed} m/s`,
    weatherState,
  }
  return data;
}

export default transformWeather;
