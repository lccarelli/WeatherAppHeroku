import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import {setFavorite} from '../../actions';

import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import FavButton from '../FavButton/FavButton';

const styles = theme => ({
  root: {
    width: '100%',
  },
  colorFont:{
    color: '#cfd8dc',
  },
  button: {
    margin: theme.spacing.unit,
    height: 60,
    width: 60
  },
});


class WeatherLocationHome extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(city){
    this.props.setFavorite(this.props.usuario.nombre,city);
    console.log(this.props.usuario.nombre,city);
    
  }

  render() {
    let { city } = this.props;
    return (
      <div className={this.props.classes.root}>
        <List className={this.props.classes.colorFont}>
          <ListItem>
            <Grid container spacing={8}>
              <Grid item xs={6} sm={6}>
                <Location city={this.props.city}/>
              </Grid>
              <Grid item xs={5} sm={5}>
                {this.props.data ? <WeatherData data={this.props.data}/> : 'Cargando...'}
              </Grid>
              <Grid item xs={1} sm={1} className="FavButton">
                <IconButton color="secondary" className={this.props.classes.button} aria-label="Add an alarm" onClick={() => this.handleClick({city})}>
                  <Icon>favorite</Icon>
                </IconButton>
              </Grid>
            </Grid>
          </ListItem>
          <Divider />
        </List>
      </div>
    );
  }
}



WeatherLocationHome.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
}

const mapStateToProps = state => ({
  location: setFavorite(state),
  usuario: state.user
});

let styledComponent =  withStyles(styles, { withTheme: true })(WeatherLocationHome);
export default connect(mapStateToProps, { setFavorite })(styledComponent);
