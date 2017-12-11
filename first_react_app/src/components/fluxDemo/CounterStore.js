import AppDispatcher from './AppDispatcher'
import * as ActionTypes from './ActionTypes'
import {EventEmitter} from 'events'


const counterValues = {
    'First': 0,
    'Second': 10,
    'Third': 20
}
const CHANGE_EVENT = 'changed';


const CounterStore = Object.assign({}, EventEmitter.prototype, {
    getCounterValues: function () {
        return counterValues;
    },
    emitChange: function () {
        console.log('CounterStore emitChange Function');
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(callback);
    }

})

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    console.log('CounterStore AppDispatcher.register Function');
    if (action.type === ActionTypes.INCREMENT) {
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMENT) {
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
});


export default CounterStore;
