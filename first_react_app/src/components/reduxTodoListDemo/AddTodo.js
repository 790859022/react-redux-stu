import React, {Component} from 'react';
import propTypes from 'prop-types';

class AddTodo extends Component {
    handleClick = (e) => {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}
AddTodo.propTypes = {
    onAddClick:propTypes.func.isRequired
}

export default AddTodo;