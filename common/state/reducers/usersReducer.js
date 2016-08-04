import { GET_USERS } from './../actions/actionsTypes';

export default (state = [], action) => {
  switch (action.type) {
    case GET_USERS: {
      return action.users;
    } default: {
      return state;
    }
  }
}
