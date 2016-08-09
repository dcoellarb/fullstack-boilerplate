import { connect } from 'react-redux';
import MasterLayoutPresentational from './MasterLayoutPresentational.jsx';
import { windowResize } from './../../../../common/state/actions/windowActions';
import { fetchUsers } from './../../../../common/state/actions/usersActions';

const mapDispatchToProps = (dispatch) => ({
  onTestObservable: () => {
    dispatch(fetchUsers());
  },
  onResize: () => {
    dispatch(windowResize());
  }
});

const MasterLayoutContainer = connect(
  null,
  mapDispatchToProps
)(MasterLayoutPresentational);

export default MasterLayoutContainer;
