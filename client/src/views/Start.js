import React from 'react';
import { connect } from "react-redux";
import { getUser } from "../actions"
import { Redirect } from "react-router";


class Start extends React.Component {
  constructor(){
    super();
    this.state = {
      isRedirected:false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(nombre){
    this.props.getUser(nombre);
    this.setState({
      isRedirected:true
    })
  }

  render() {


    return (
      <div className="fondo-home">
          {this.state.isRedirected && <Redirect to="/home"/>}
          <div className="home-title">weatherApp</div>
            <div className="form-account">
                <div className="user-button-container">
                  <button className="user-button" onClick={() => this.handleClick('laura')}>LAURA</button>
                </div>
                <div className="user-button-container">
                  <button className="user-button" onClick={() => this.handleClick('juan pablo')}>JUAN PABLO</button>
                </div>
                <div className="user-button-container">
                  <button className="user-button" onClick={() => this.handleClick('evelyn')}>EVELYN</button>
                </div>
            </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, { getUser })(Start);
