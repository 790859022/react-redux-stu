import {createStore, combineReducers} from 'redux';
import {reducer as todoReducer} from './todos';
import {reducer as filterReducer} from './filter';


const reducer = combineReducers({
    todos: todoReducer,
    filter: filterReducer,

})
const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;