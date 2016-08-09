import Parse from 'parse-env-chooser';
import Rx from 'rx';

export const fetchUsers = () => {
  const query = new Parse.Query(Parse.User);
  return Rx.Observable.fromPromise(query.find());
}