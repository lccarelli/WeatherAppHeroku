import {createSelector} from 'reselect';
import toPairs from 'lodash.topairs';
import {SET_FORECAST_DATA, SET_WEATHER_CITY, GET_WEATHER_CITY} from '../actions/index';

export const cities = ( state = {}, action) => {
  switch (action.type) {
    case SET_FORECAST_DATA: {
      const {city, forecastData} = action.payload;
      return {...state,[city]:{...state[city], forecastData, forecastDataDate: new Date()}};
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;
      return {...state, [city]:{...state[city], weather:null, weatherDate: new Date()}};
    }
    case SET_WEATHER_CITY: {
      const {city, weather} = action.payload;
      return {...state, [city]:{...state[city], weather}};
    }
    default:
      return state;
  }
}

//establezco selector en el punto donde se conoce la estructura del estado
//voy a obtener la información del pronostico extendido desde las ciudades
export const getForecastDataFromCities =
  createSelector((state, city) =>
    state[city] && state[city].forecastData,
      forecastData => forecastData);

const convertCitiesToArray = cities =>
  (toPairs(cities).map(([key,value]) => ({key, name: key, data: value.weather})));

export const getWeatherCities =
  createSelector( state => convertCitiesToArray(state), cities => cities )
