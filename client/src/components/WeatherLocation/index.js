import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Location from './../Location/Location';
import WeatherData from '../WeatherData';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import { deleteFavorite } from "../../actions"

const styles = theme => ({
  card: {
    display: 'flex',
    margin: '2rem',
    backgroundColor: 'transparent !important',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100% !important',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },
  button: {
    // margin: theme.spacing.unit,
    height: 60,
    width:60
  },
  div: {
    height: 30,
    color: '#fff',
  }

});

const WeatherLocation =({onWeatherLocationClick, city, data, classes, deleteFavorite, usuario}) => (
      <div>
        <Card className={classes.card} onClick={onWeatherLocationClick}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
                <Location city={city}/>
                <Grid container spacing={8}>
                <Grid item xs={9}>
                  {data ? <WeatherData data={data}/> : 'Cargando...'}
                </Grid>
                <Grid item xs={3} className="button-delete" onClick={()=>deleteFavorite(usuario.nombre,city)}>
                  <span className={classes.div}>
                    <IconButton className={classes.button} aria-label="Delete">
                      <DeleteIcon />
                    </IconButton>
                  </span>
                </Grid>
              </Grid>
            </CardContent>
          </div>
        </Card>
      </div>
);

WeatherLocation.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string,
  onWeatherLocationClick: PropTypes.func,
  data: PropTypes.shape ({
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};

const mapStateToProps = (state) => {
  return {
    usuario: state.user
  }
};

let tempComp = withStyles(styles, { withTheme: true })(WeatherLocation);
export default connect(mapStateToProps,{ deleteFavorite })(tempComp);
