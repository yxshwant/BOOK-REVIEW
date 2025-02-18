import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TextField from 'components/TextField';
import Button from 'components/Button';
import * as actions from '../actions';

class BookAdd extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isbn: "",
            title: ""
        }
    }

    render() {

        if (this.props.bookAdded) {
            return <Redirect to='/' />
        }
        return (
            <div className="app-card-block ">
                <TextField
                    placeholder="ISBN"
                    width="200"
                    height="30"
                    value={this.state.isbn}
                    onChange={(e) => this.setState({ isbn: e.target.value })}
                />
                <TextField
                    placeholder="Title"
                    width="200"
                    height="30"
                    value={this.state.title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                />
                <Button
                    onClick={() => this.props.addBook(this.state)}
                    width="200"
                    height="30"
                    label="Submit" />
               

            </div>
        );
    }
}

const mapStateToProps = state => ({
    bookAdded: state.book.bookAdded
})

export default connect(mapStateToProps, actions)(BookAdd)
