import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {FilterTypes} from "../../constants";
import TodoItem from './todoItem';
import TransitionGroup from 'react-addons-css-transition-group';
import {spring, TransitionMotion} from 'react-motion';

// const TodoItem = (props) => {
//     const {text, completed, onToggle, onRemove} = props;
//     console.log('TodoItem')
//     return (
//         <li
//             className={completed ? 'completed' : ''}
//
//         >
//             <span onClick={onRemove}>×</span>
//             <input type="checkbox" name="" checked={completed} readOnly onClick={onToggle} id=""/>
//
//             {text}
//         </li>
//     )
// }

// 使用 react-addons-css-transition-group 实现动画
// const TodoList = (props) => {
//     const {todos} = props;
//     return (
//         <ul className="todo-list">
//             <TransitionGroup transitionName="fade" transitionEnterTimeout={1000} transitionLeaveTimeout={1000}>
//                 {
//                     todos.map(item => <TodoItem
//                         key={item.id}
//                         id={item.id}
//                         text={item.text}
//                         completed={item.completed}
//                     />)
//                 }
//             </TransitionGroup>
//         </ul>
//     )
// }


// 使用 react-motion 实现动画
const getStyles = (todos) => {
    return todos.map(item => ({
            key: item.id.toString(),
            data: item,
            style: {
                height: spring(60),
                opacity: spring(1)
            }
        })
    )
}
const willEnter = () => {
    return {
        height: 0,
        opacity: 0
    }
}
const willLeave = () => {
    return {
        height: spring(0),
        opacity: spring(0)
    }
}
const TodoList = (props) => {
    const {todos} = props;
    const styles = getStyles(todos)
    return (
        <TransitionMotion willLeave={willLeave} willEnter={willEnter} styles={styles}>
            {
                interpolatedStyles =>
                    <ul className="todo-list">
                        {
                            interpolatedStyles.map(config => {
                                const {data, style, key} = config;
                                const item = data;
                                return (<TodoItem
                                    style={style}
                                    key={item.id}
                                    id={item.id}
                                    text={item.text}
                                    completed={item.completed}
                                />)
                            })
                        }
                    </ul>
            }

        </TransitionMotion>

    )
}

const selectVisibleTodos = (todos, filter) => {
    switch (filter) {
        case FilterTypes.ALL:
            return todos;
        case FilterTypes.COMPLETED:
            return todos.filter(item => item.completed)
        case FilterTypes.UNCOMPLETED:
            return todos.filter(item => !item.completed)
        default:
            throw new Error('unsupported filter');
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        // todos: state.todos
        todos: selectVisibleTodos(state.todos, state.filter)
    }
}


export default connect(mapStateToProps)(TodoList)