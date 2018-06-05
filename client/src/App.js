import React from 'react';
import { Route, Router } from 'react-router';
import PropTypes from 'prop-types';
import './App.css';
import UserListItem from '../src/components/Users/UserList';
import UserBoard from './views/UserBoard';
import Home from './views/Home';
import Start from './views/Start';



class App extends React.Component {

  render() {
    return (
      <div>
        <Router history={ this.props.history }>
        <div>
          <Route exact path="/" component={Start}/>
          <Route exact path="/home" component={Home}/>
          {/* <Route exact path="/boards" component={ UserListItem }/> */}
          <Route exact path="/boards/:nombre" component={ UserBoard }/>

        </div>
      </Router>

      </div>
    );
  }
}

App.propTypes = {
  history: PropTypes.any,
};

export default App;
