import localizator from './../../localization/localizator';
import { SET_LANGUAGE } from './../actions/actionsTypes';

export default (
  state = { localizator: localizator.filter(obj => obj.lang === 'en')[0] },
  action
) => {
  switch (action.type) {
  	case SET_LANGUAGE: {
      return { localizator: localizator.filter(obj => obj.lang === action.lang)[0] };
    }
    default: {
        return state;
    }
  }
}