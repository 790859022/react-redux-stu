import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker'
// import ControlPanel from './components/fluxDemo/ControlPanel'


// redux todolist demo

// import todoApp from './components/reduxTodoListDemo/reducers';
// import App from './components/reduxTodoListDemo/App';
// let store = createStore(todoApp);
// console.log(store)
// console.log(store.getState())
// ReactDOM.render(<Provider  store={store}><App /></Provider>, document.getElementById('root'));

// redux  counter demo
// import ControlPanel from './components/reduxCounterDemo/ControlPanel'
// ReactDOM.render(
//     <ControlPanel />,
//     document.getElementById('root')
// )

// redux with context  counter demo
// import Provider from './components/reduxWithContextCounterDemo/Provider';
// import store from './components/reduxWithContextCounterDemo/Store';
// import CounterPanel from './components/reduxWithContextCounterDemo/CounterPanel';
//
// ReactDOM.render(
//     <Provider store={store}>
//         <CounterPanel/>
//     </Provider>,
//     document.getElementById('root')
// )

// react-redux  counter demo
// import {Provider} from 'react-redux'
// import CounterPanel from './components/reactReduxCounterDemo/CounterPanel'
// import store from './components/reactReduxCounterDemo/Store'
// ReactDOM.render(
//     <Provider store={store}>
//         <CounterPanel />
//     </Provider>
//     ,
//     document.getElementById('root')
// )

// react-redux todoList demo
import {Provider} from 'react-redux'
import App from './components/reactReduxTodoListDemo/TodoApp';
import store from './components/reactReduxTodoListDemo/Store'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>
    ,
    document.getElementById('root')
)

// react-dnd demo
// import App from './components/react-dnd-demo/Lonely-Knight/App';
// ReactDOM.render(
//         <App/>
//     ,
//     document.getElementById('root')
// )

// import App from './components/react-dnd-demo/sort-list/App';
//
// ReactDOM.render(
//     <App/>
//     ,
//     document.getElementById('root')
// )

// import App from './components/ch06/App';
//
// ReactDOM.render(
//     <App/>
//     ,
//     document.getElementById('root')
// )

// import App from './components/count-down-demo/App';
//
// ReactDOM.render(
//     <App/>
//     ,
//     document.getElementById('root')
// )

// import App from './components/react-weather-demo/App';
//
// ReactDOM.render(
//     <App/>
//     ,
//     document.getElementById('root')
// )

// import {Provider} from 'react-redux'
// import App from './components/react-redux-weather-demo/App';
// import store from './components/react-redux-weather-demo/Store';
//
// ReactDOM.render(
//     <Provider store={store}>
//         <App/>
//     </Provider>
//     ,
//     document.getElementById('root')
// )

registerServiceWorker();
