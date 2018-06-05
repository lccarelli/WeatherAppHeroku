import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import LocationList from './../components/Location/LocationList';
import {setSelectedCity, setWeather} from './../actions';
import {getWeatherCities, getCity} from './../reducers';

class LocationListContainer extends React.Component {

  componentDidMount(){
    const {setWeather, setCity, cities, city} = this.props;
      setCity(city);
      setWeather(cities);
      console.log("this.props.citiesWeather");
      console.log(this.props.citiesWeather);
  }
  //manejador de evento
  handleSelectedLocation = city => {
    this.props.setCity(city);
  }
  //cities viene de arriba y es tus favoritos ['Buenos Aires, AR','adfadf',etc]
  //Pasarlo a LocationList como prop "favCities"
  render() {
      return (
        <LocationList
          cities={this.props.citiesWeather}
          onSelectedLocation={this.handleSelectedLocation}
          ></LocationList>
      );
    }
}

LocationListContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToPropsActions)(LocationListContainer);
