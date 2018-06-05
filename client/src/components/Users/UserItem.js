import React from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router';

export default class UserItem extends React.Component {
  constructor(){
    super();
    this.state = {
      isRedirected: false
    }
    this.onClick = this.onClick.bind(this);
  }
  onClick(e){
    // alert(this.props.nombre);
    this.setState({isRedirected:true});
  }
  render() {
    const {nombre} = this.props;
    if(this.state.isRedirected){
      return(<Redirect to={'/boards/'+ nombre }/>);
    }
    return (
      <div onClick={this.onClick}>
        <h4>{nombre}</h4>
      </div>
    );
  }
}

UserItem.propTypes = {
  nombre: PropTypes.string.isRequired,
};
