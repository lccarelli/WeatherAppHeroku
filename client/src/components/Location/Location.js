import React from 'react';
import PropTypes from 'prop-types';


class Location extends React.Component {

  constructor(props){
    super();
  }

  render(){
    return (
      <div className="location-title">
            {this.props.city}
        </div>
      );

  }
};

Location.propTypes = {
  city: PropTypes.string.isRequired,
};

export default Location;
