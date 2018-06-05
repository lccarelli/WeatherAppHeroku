import React from 'react';
import {getUsers} from '../../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserItem from './UserItem';


class UserListItem extends React.Component {

  constructor() {
    super();

  }

  componentDidMount(){
    this.props.getUsers();

  };

  render() {
    console.log(this.props.users.payload);
    let users = [];
    if (this.props.users.payload){
      users = this.props.users.payload.map((currentValue, index, array) => {
        return(<UserItem key={index} nombre={currentValue.nombre}/>)
      })
    }
    return(
      <div>
        {users}
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    users: state.getUsers
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    getUsers
  }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(UserListItem);
