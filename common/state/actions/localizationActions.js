import { SET_LANGUAGE } from './actionsTypes';

export function setLanguage(lang) {
  return {
    type: SET_LANGUAGE,
    lang
  };
}