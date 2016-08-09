
import { expect } from 'chai';
import Parse from 'parse-env-chooser';
import ParseMockDB from 'parse-mockdb';
import config from './../common/config/config';
import usersReducer from './../common/state/reducers/usersReducer';
import {
  getUsers,
  fetchUsers
} from './../common/state/actions/usersActions';

describe('Users Reducer', () => {
  before(function() {
    ParseMockDB.mockDB();

    Parse.initialize(config.parse.appID);
    Parse.serverURL = config.parse.serverURL;
  });

  after(function() {
    ParseMockDB.cleanUp(); // Clear the Database
    ParseMockDB.unMockDB(); // Un-mock the Parse RESTController
  });

  it('Default', () => {
    const resultState = usersReducer(undefined, {});
    expect(resultState.length).to.be.equal(0);
  });
  it('Get users', () => {
    const resultState = usersReducer(undefined, getUsers([{id:1},{id:2}]));
    expect(resultState.length).to.be.equal(2);
  });

  it('Fetch users', (done) => {
    const dispatchMock = (action) => {
      if (typeof action === 'function') {
        action(dispatchMock);
      } else {
        const result = usersReducer(undefined, action);
        expect(result.length).to.be.equal(0);
        done();
      }
    };

    dispatchMock(fetchUsers());
  });

});