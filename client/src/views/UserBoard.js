import React from 'react';
import { connect } from 'react-redux';
import { getUser, getCityFavoriteUser } from '../actions';
import Grid from '@material-ui/core/Grid';
import LocationListContainer from './../containers/LocationListContainer';
import ForecastExtendedContainer from './../containers/ForecastExtendedContainer';


// const cities = [
//   'Buenos Aires,AR',
//   'New York,US',
//   'Moscow, US',
//   'Berlin, US',
//   'Madrid,ES',
//   'Bogota,COL',
//   'Toki,JP'
// ];

class Boards extends React.Component {
  // const cities = this.props;
  constructor(props){
    super(props);
    console.log(this.props.getCityFavoriteUser);
  }

  render() {
    const nombre = this.props.match.params.nombre;
    let cities;
    if(this.props.user){
      cities = this.props.user.ciudadesFavoritas.map(ciudad => {
        if(!ciudad) return null;
        return ciudad.city
      })
    }
    console.log("cities",cities)

    return (
      <div className="fondo-home">
        <div className="username">{`Usuario: ${nombre}`}</div>
          <div className="home-title">weatherApp</div>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <LocationListContainer cities={cities}/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <ForecastExtendedContainer/>
            </Grid>
          </Grid>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user

  }
}

export default connect(mapStateToProps, {getUser,getCityFavoriteUser})(Boards);
