import { browserHistory } from 'react-router'
import * as api from './../../../api/login'
import {
	SET_LOGIN_CONTEXT,
	SET_LOGOUT_CONTEXT,
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED,
} from './actionsTypes';

export const setLoginContext = (user, role, object) => ({
  type: SET_LOGIN_CONTEXT,
  user,
  role,
  object
})
export const setLogoutContext = () => ({
  type: SET_LOGOUT_CONTEXT
})

export const emailChange = (text) => ({
  type: LOGIN_EMAIL_CHANGED,
  text
})
export const passwordChange = (text) => ({
  type: LOGIN_PASSWORD_CHANGED,
  text
})

export const login = (email, password) => (dispatch) => {
  console.log("loginin");
  let obtainedUser;
  let obtainedRole;
  api.login(email, password)
    .subscribe(
      (user) => {
        dispatch(setLoginContext(user, undefined, undefined)); 
        browserHistory.push('/');
      },
      (error) => {      
        console.dir(error)
      },
      () => {
        console.log('completed')
      }
  );
};

export const logout = () => (dispatch) => {
  apiLogin.logout()
    .subscribe(
      () => {
        browserHistory.push('/login');
        dispatch(setLogoutContext()); 
      },
      (error) => {      
        console.dir(error)
      },
      () => {
        console.log('completed')
      }
  );
};
