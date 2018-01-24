import React, {Component} from 'react';
import * as actions from '../actions';
import {connect} from 'react-redux';

const TodoItem = (props) => {
    const {text,style, completed, onToggle, onRemove} = props;
    console.log('TodoItem')
    return (
        <li
            className={completed ? 'completed' : ''}
            style={style}

        >
            <span onClick={onRemove}>×</span>
            <input type="checkbox" name="" checked={completed} readOnly onClick={onToggle} id=""/>

            {text}
        </li>
    )
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        onToggle:()=>{
            dispatch(actions.toggleTodo(ownProps.id))
        },
        onRemove:()=>{
            dispatch(actions.removeTodo(ownProps.id));
        }
    }
}
export default connect(null,mapDispatchToProps)(TodoItem)

// class TodoItem extends Component {
//     shouldComponentUpdate(nextProps,nextState){
//         console.log(nextProps.completed,this.props.completed)
//         return true;
//     }
//     render() {
//         const {text, completed, onToggle, onRemove} = this.props;
//         console.log('TodoItem')
//         return (
//             <li
//                 className={completed ? 'completed' : ''}
//
//             >
//                 <span onClick={onRemove}>×</span>
//                 <input type="checkbox" name="" checked={completed} readOnly onClick={onToggle} id=""/>
//
//                 {text}
//             </li>
//         )
//     }
// }
//
// export default TodoItem;
