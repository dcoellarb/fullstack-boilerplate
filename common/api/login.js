import Parse from 'parse-env-chooser';
import Rx from 'rx';

export const current = () => {
  return Parse.User.current();
}
export const login = (email, password) => {
  return Rx.Observable.fromPromise(Parse.User.logIn(email, password));
}
export const logout = () => {
  return Rx.Observable.fromPromise(Parse.User.logOut());
}