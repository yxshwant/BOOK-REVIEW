import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Button from 'components/Button';
import TextField from 'components/TextField';
import * as actions from '../actions';

class Authentication extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    }
  }

  render() {
    if (this.props.userName) {
      return <Redirect to='/' />;
    }

    return (
      <div className="app-login">
        <TextField
          placeholder="Enter your Username"
          width="200"
          height="30"
          value={this.state.userName}
          onChange={(e) => this.setState({ userName: e.target.value })}
        />
        <Button
          onClick={() => this.props.authenticateUser(this.state.userName)}
          width="200"
          height="30"
          label="Submit" />
      </div>
    );
  }
}


const mapStateToProps = state => ({
  userName: state.user.userName
})

export default connect(mapStateToProps, actions)(Authentication)

