import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { globalColors } from './../../../../common/styles/globals';

const PedidosPresenter = ({
  email,
  password,
  onLogin,
  onEmailChange,
  onPasswordChange
}) => {
  /* Local Styles Start */
  const mainDivStyle = {
    width: '100%',
    height: '100vh',
    backgroundColor: globalColors.primary1Color
  };
  const loginDivStyle = {
    width: 250,
    height: 250,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  };
  /* Local Styles End */

  return (
    <div className="flex-center-center" style={mainDivStyle}>
      <div className="flex-column flex-center-center" style={loginDivStyle}>
        <TextField
          value={email}
          type="email"
          hintText="Ingrese su email"
          floatingLabelText="Email"
          fullWidth
          onChange={(e) => onEmailChange(e.target.value)}
        />
        <TextField
          value={password}
          type="password"
          hintText="Ingrese su clave"
          floatingLabelText="Clave"
          fullWidth
          onChange={(e) => onPasswordChange(e.target.value)}
        />
        <RaisedButton label="Login" primary onClick={() => onLogin(email, password)} />
      </div>
    </div>
  );
};

PedidosPresenter.propTypes = {
  email: React.PropTypes.string,
  password: React.PropTypes.string,
  onLogin: React.PropTypes.func,
  onEmailChange: React.PropTypes.func,
  onPasswordChange: React.PropTypes.func
};

export default PedidosPresenter;
