import React ,{Component} from 'react';
import PropTypes from 'prop-types';

class Todo extends Component{
    render(){
        console.log('Todo')
        return(
            <li style={{
                textDecoration:this.props.completed ? 'line-through':'none',
                cursor:this.props.completed ? 'default':'pointer'
            }} onClick={this.props.onClick}>{this.props.text}</li>
        )
    }
}

Todo.propTypes = {
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}

export default Todo;