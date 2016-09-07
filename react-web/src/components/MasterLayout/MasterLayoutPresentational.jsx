import React, { Component } from 'react';
import { withRouter } from 'react-router';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ActionExitToApp from 'material-ui/svg-icons/action/exit-to-app';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

const MasterLayoutPresentational = class extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
  }

  openMenu() {
    this.setState({ open: true });
  }

  render() {
    return (
      <section>
        <AppBar
          title="EZ"
          iconElementLeft={
            <IconButton tooltip="Abrir Menu" onClick={() => this.openMenu()}>
              <NavigationMenu />
            </IconButton>
          }
          iconElementRight={
            <IconButton tooltip="Salir" onClick={() => this.props.onLogOut()}>
              <ActionExitToApp />
            </IconButton>}
        />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>
        {this.props.children}
      </section>
    );
  }
};


MasterLayoutPresentational.propTypes = {
  children: React.PropTypes.object.isRequired,
  onResize: React.PropTypes.func,
  onLogOut: React.PropTypes.func
};

export default withRouter(MasterLayoutPresentational);

