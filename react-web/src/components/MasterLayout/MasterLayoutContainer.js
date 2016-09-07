import { connect } from 'react-redux';
import MasterLayoutPresentational from './MasterLayoutPresentational.jsx';
import actions from './../../../../common/state/actions/actions';

const mapDispatchToProps = (dispatch) => ({
  onResize: () => {
    dispatch(actions.windowResize());
  },
  onLogOut: () => {
    dispatch(actions.context.logout());
  }
});

const MasterLayoutContainer = connect(
  null,
  mapDispatchToProps
)(MasterLayoutPresentational);

export default MasterLayoutContainer;
