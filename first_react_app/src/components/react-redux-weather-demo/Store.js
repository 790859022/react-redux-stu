import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {reducer as weatherReducer} from './weather';
import promiseMiddleware from './promiseMiddleware';


// console.log('Store.js')
const win = window;

const reducer = combineReducers({
    weather: weatherReducer
})
// console.log('Store reducer');
// console.log(reducer);

// 自定义中间件
const testMiddleware = ({dispatch, getState}) => next => action => {
    // console.log(action)
    action.result && (action.result.test = '中间件给action添加的字段')
    return next(action)
}

const changeTestMiddleware = (dispatch, getState) => (next) => (action) => {
    action.result && (action.result.test = '修改test')
    return next(action)
}


const logEnhancer = (createStore) => (reducer, preloadedState, enhancer) => {
    const store = createStore(reducer, preloadedState, enhancer);

    const originalDispatch = store.dispatch;
    store.dispatch = (action) => {
        console.log('dispatch action:', action);
        originalDispatch(action)
    }
    return store;
}


// const middlewares = [thunkMiddleware, testMiddleware,changeTestMiddleware];
const middlewares = [thunkMiddleware, promiseMiddleware, testMiddleware, changeTestMiddleware];
console.log((f) => f);
const storeEnhancers = compose(applyMiddleware(...middlewares), (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f);


const store = createStore(reducer, {}, storeEnhancers)


// console.log(store.getState())
export default store;
