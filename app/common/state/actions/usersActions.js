import Rx from 'rx';
import { GET_USERS } from './actionsTypes';
import * as api from './../../api/users';

// Simple actions
export const getUsers = (users) => ({
  type: GET_USERS,
  users
})

// Async actions
export const fetchUsers = () => (dispatch) => {
  // TODO check if already fetching data
  // i.e. return false;
  
  const suscription = api.fetchUsers().subscribe(
    (users) => dispatch(getUsers(users)),
    (error) => console.dir(error),
    () => {}
  );

  // TODO what to do with the suscription, dispath it to store?
  return;
}

