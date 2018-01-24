import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addTodo, completeTodo, setVisibilityFilter, VisibilityFilters} from './actions';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import './todoList.less';

class App extends Component {
    render() {
        console.log(this.props)
        const {dispatch, visibleTodos, visibilityFilter} = this.props;
        return (
            <div className="todo-list-layer">
                <AddTodo onAddClick={text => dispatch(addTodo(text))}/>
                <TodoList todos={visibleTodos} onTodoClick={index => dispatch(completeTodo(index))}/>
                <Footer filter={visibilityFilter}
                        onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter))}/>
            </div>

        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLATE',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed)

    }
}

function select(state){
    return{
        visibleTodos:selectTodos(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}


export default connect(select)(App);