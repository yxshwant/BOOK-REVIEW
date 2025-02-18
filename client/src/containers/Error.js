import React, { Component } from 'react';
import { connect } from 'react-redux';

class Error extends Component {

    render() {
        console.log(this.props.error)
        if (this.props.error) {
            return <div className="alert alert-danger">
                <strong>{this.props.error.error}</strong> <label>{this.props.error.detail}</label>
            </div>
        }
        else {
            return <div></div>
        }
    }
}

const mapStateToProps = state => ({
    error: state.error.error,
})

export default connect(mapStateToProps, null)(Error)
