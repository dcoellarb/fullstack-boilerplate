import { connect } from 'react-redux';
import actions from './../../../../common/state/actions/actions';
import LoginPresenter from './LoginPresenter.jsx';

const mapStateToProps = (state) => ({
  email: state.login.email,
  password: state.login.password
});

const LoginContainer = connect(
  mapStateToProps,
  {
    onEmailChange: actions.context.emailChange,
    onPasswordChange: actions.context.passwordChange,
    onLogin: actions.context.login
  }
)(LoginPresenter);

export default LoginContainer;
