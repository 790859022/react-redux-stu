import * as actionTypes from './actionTypes';

export default (state = [], action) => {
    switch (action.type) {
        case actionTypes.ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: action.completed
                }
            ]
        case actionTypes.TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.id) {
                    item.completed = !item.completed;

                }
                return item;
            })
        case actionTypes.REMOVE_TODO:
            return state.filter(item => item.id !== action.id)
        default:
            return state;
    }
}