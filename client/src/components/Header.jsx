import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <AppBar
        title="TetriX"
        showMenuIconButton={false} />
      </div>
    );
  }
}

export default Header;