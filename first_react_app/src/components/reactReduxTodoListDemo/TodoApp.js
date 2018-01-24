import React from 'react';
import {view as Todos} from './todos';
import {view as Filters} from './filter';
import './app.less';


// let lastTimeStamp = new Date().getTime();
//
// function raf(fn) {
//     let currTimeStamp = new Date().getTime();
//     console.log(currTimeStamp)
//     console.log(lastTimeStamp)
//     let delay = Math.max(0, 16 - (currTimeStamp - lastTimeStamp));
//     console.log(delay)
//     let handle = setTimeout(() => {
//         fn && fn(currTimeStamp);
//     }, delay);
//     lastTimeStamp = currTimeStamp;
//     return handle;
// }
//
// let left = 0;
// let startTimestamp = new Date().getTime();
//
// function render(timestamp) {
//     left += (timestamp - startTimestamp) / 16;
//
//     if (left < 400) {
//         raf(render)
//     }
// }
//
// raf(render);

const TodoApp = () => {
    return (
        <div className='todo-app'>
            <Todos/>
            <Filters/>
            <br/>
            <div className="move-left-box">
                css 动画缺点，不会在动画执行过程中记录中间状态，一定中间动画被打断，则从新执行。
            </div>
        </div>
    )
}
export default TodoApp;