export default function(state = [], action){
  switch (action.type) {
    case 'GET_USER':
      return action.payload;
    case 'GET_CITY_USER':
      return action.payload;
    case 'SET_FAVORITE':
      return action.payload;
    case 'DELETE_FAVORITE':
      return action.payload;
    default:
      return state;
  }
}
