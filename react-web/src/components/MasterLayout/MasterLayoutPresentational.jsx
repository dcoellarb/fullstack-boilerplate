import React, { Component } from 'react';
import { withRouter } from 'react-router';

const MasterLayoutPresentational = class extends Component {
  componentDidMount() {
    window.addEventListener('resize', this.props.onResize);
    this.props.onTestObservable();
  }

  render() {
    return (
      <section>
        {this.props.children}
      </section>
    );
  }
};


MasterLayoutPresentational.propTypes = {
  children: React.PropTypes.object.isRequired,
  onResize: React.PropTypes.func,
  onTestObservable: React.PropTypes.func
};

export default withRouter(MasterLayoutPresentational);

