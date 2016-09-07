import {
  SET_LOGIN_CONTEXT,
  SET_LOGOUT_CONTEXT,
  LOGIN_EMAIL_CHANGED,
  LOGIN_PASSWORD_CHANGED
} from './../actions/actionsTypes';

export default (
  state = {
    currentUser: {},
    email: '',
    password: ''
  },
  action
) => {
  switch (action.type) {
    case SET_LOGIN_CONTEXT: {
      const id = action.user ? action.user.id : undefined;

      const role = action.role ? {
        id: action.role.id,
        name: action.role.get("name")
      } : undefined;

      const object = action.object ? {
        entity: role ? role.get("name") : undefined,
        id: action.object.id,
        nombre: action.object.get('nombre')
      } : undefined

      const currentUser = {id, role, object}
      return Object.assign({}, state, {
        currentUser,
        email: '',
        password: ''
      });
    }
    case SET_LOGOUT_CONTEXT: {
      return Object.assign({}, state, {
        currentUser: {},
        email: '',
        password: ''
      });
    }
    case LOGIN_EMAIL_CHANGED: {
      return Object.assign({}, state, {
        email: action.text
      });
    }
    case LOGIN_PASSWORD_CHANGED: {
      return Object.assign({}, state, {
        password: action.text
      });
    }    
    default: {
      return state;
    }
  }
}
