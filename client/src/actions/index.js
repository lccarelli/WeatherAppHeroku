import axios from 'axios';
import transformForecastExtended from './../services/transformForecastExtended';
import transformWeather from './../services/transformWeather';


//USERS

export const GET_USERS = 'GET_USERS';

const GetUsers = payload => ({ type: GET_USERS, payload });

export const getUsers = () => {
  return (dispatch, getstate) => {

      console.log('se llamo a la accion de get user');
      axios.get('/getUsers').then((response) => {
        if(response.data)dispatch(GetUsers(response.data.usuarios));
      });
  }
}

export const GET_USER = 'GET_USER';

const GetUser = payload => ({ type: GET_USER, payload });

export const getUser = (nombre) => {
  return (dispatch, getstate) => {

      axios.post('/getUser', { nombre }).then((response) => {
        if(response.data) dispatch(GetUser(response.data.usuario));
      });
  }
}

export const GET_CITY_USER = 'GET_CITY_USER';

const getCityUser = payload => ({ type: GET_CITY_USER, payload });

export const getCityFavoriteUser = (nombre) => {
  return (dispatch, getstate) => {

      axios.post('/usuario/ciudadesFavoritas', { nombre }).then((response) => {
        if(response.data) dispatch(getCityUser(response.data.usuario.ciudadesFavoritas));
        console.log(response.data.usuario.ciudadesFavoritas);
      });
  }
}


//USERS
export const SET_FAVORITE = 'SET_FAVORITE';

const setFavoriteAction = payload => ({ type: SET_FAVORITE, payload });

export const setFavorite = (nombre, location) => {
  return (dispatch, getstate) => {
      axios.post('/usuario/ciudadesFavoritas',{nombre,location})
      .then((response) => {
        if(response.data)dispatch(setFavoriteAction(response.data.usuario));
      })
  }
}

export const DELETE_FAVORITE = 'DELETE_FAVORITE';

const deleteFavoriteAction = payload => ({ type: DELETE_FAVORITE, payload });

export const deleteFavorite = (nombre, location) => {
  console.log(nombre);
  console.log(location);
  return (dispatch, getstate) => {
      axios.post('/usuario/deleteCiudadesFavoritas',{nombre,location})
      .then((response) => {
        if(response.data)dispatch(deleteFavoriteAction(response.data.usuario));
      })
  }
}



//CITY

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WEATHER_CITY = 'SET_WEATHER_CITY';


const setCity = payload => ({ type: SET_CITY, payload });
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({type: GET_WEATHER_CITY, payload});
const setWeatherCity = payload => ({type: SET_WEATHER_CITY, payload});

const urlForecast = 'http://api.openweathermap.org/data/2.5/forecast';
const urlWeather = 'http://api.openweathermap.org/data/2.5/weather';
const apiKey = '520f5e5567a4fd09ce34799b138a759b';

export const setSelectedCity = payload => {
  return (dispatch, getState) => {

      const apiForecast = `${urlForecast}?q=${payload}&appid=${apiKey}&units=metric`;

      //accion inicial, activa en el estado un indicador de busqueda de datos
      dispatch(setCity(payload));

      // chequea el date en que se hace el fetch y si fue dentro del minuto no vuelve a realizarlo
      const state = getState();
      const date = state.cities[payload] && state.cities[payload].forecastDataDate;
      const now = new Date();

      if( date && (now - date) < 60000){
        return;
      }

      return fetch(apiForecast).then(
        data => (data.json())
      ).then(
        forecastWeatherData => {
          const forecastData = transformForecastExtended(forecastWeatherData);
          //modificar el estado con el resultado de la promise
          dispatch(setForecastData({city: payload, forecastData}));
        }
      );
  };
};

export const setWeather = payload => {
  return (dispatch, getState) => {
    payload.forEach(city => {
      dispatch(getWeatherCity(city))
      const apiWeather = `${urlWeather}?q=${city}&appid=${apiKey}&units=metric`;

      const state = getState();
      const date = state.city[payload] && state.city[payload].weatherDate;
      const now = new Date();

      if( date && (now - date) < 60000){
        return;
      }

      fetch(apiWeather).then( data => {
        return data.json();
      }).then( weatherdata => {
        const weather = transformWeather(weatherdata);
        dispatch(setWeatherCity({city, weather}));
      });
    });
  }
}
