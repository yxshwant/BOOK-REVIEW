import React, { Component } from 'react';
import Authentication from 'containers/Authentication'
import Error from 'containers/Error'

export default class AuthenticationPage extends Component {
  render() {
    return (
      <div className="app-authenticaion">
        <Authentication />
        <Error />
      </div>
    );
  }
}

