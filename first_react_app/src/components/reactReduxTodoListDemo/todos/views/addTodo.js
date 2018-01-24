import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions'


class AddTodo extends Component {
    state={
        value:''
    }
    refInput = (node) => {
        this.input = node
    }
    onInputChange = (e) => {
        this.setState({
            value:e.target.value
        })
    }
    onSubmit = (e) => {
        e.preventDefault();
        let {value} = this.state;

        if (!value.trim()) {
            return;
        }
        this.props.onAdd(value);
        this.setState({value: ''})

        // const input = this.input;
        // if (!input.value.trim()) {
        //     return;
        // }
        // this.props.onAdd(input.value);
        // input.value = '';
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input type="text" className="new-todo" value={this.state.value}
                           onChange={this.onInputChange}/>
                    <button className="add-btn" type="submi">+</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAdd: (text) => {
            dispatch(actions.addTodo(text))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddTodo);