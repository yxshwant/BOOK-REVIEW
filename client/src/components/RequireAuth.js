import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export default function(ComposedComponent) {
  class RequireAuth extends Component {
    static contextTypes = {
      router: PropTypes.object.isRequired
    }

    componentWillMount() {
      if (!this.props.userName) {
        this.context.router.history.push('/authenticate');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.userName ) {
        this.context.router.history.push('/authenticate');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { userName: state.user.userName };
  }

  return connect(mapStateToProps)(RequireAuth);
}