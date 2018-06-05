import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationListHome from '../components/Location/LocationListHome';
import {setSelectedCity, setWeather} from './../actions';
import {getWeatherCities, getCity} from './../reducers';

class LocationListHomeContainer extends React.Component {

  componentDidMount(){
    const {setWeather, setCity, cities, city} = this.props;
      setCity(city);
      setWeather(cities);

  }
  //manejador de evento
  handleSelectedLocation = city => {
    this.props.setCity(city);
  }

  render() {
      return (
        <LocationListHome cities={this.props.citiesWeather}
          onSelectedLocation={this.handleSelectedLocation}
          ></LocationListHome>
      );
    }
}

LocationListHomeContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array.isRequired,
    city: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  citiesWeather: getWeatherCities(state),
  city: getCity(state)
});

const mapDispatchToPropsActions = dispatch => ({
  setCity: value => dispatch(setSelectedCity(value)),
  setWeather: cities => dispatch(setWeather(cities))
});

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListHomeContainer);
