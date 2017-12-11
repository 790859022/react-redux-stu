import CounterStore from "./CounterStore";
import {EventEmitter} from 'events';
import AppDispatcher from "./AppDispatcher";
import * as ActionTypes from './ActionTypes'

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key]
        }
    }
    return summary;
}


const SummaryStore = Object.assign({}, EventEmitter.prototype, {
    getSummary: function () {
        return computeSummary(CounterStore.getCounterValues());
    },
    emitChange: function () {
        console.log('SummaryStore emitChange Function')
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function (callback) {
        this.removeListener(callback);
    }
})

SummaryStore.dispatchToken = AppDispatcher.register((action) => {
    console.log('SummaryStore AppDispatcher.register Function')
    if ((action.type === ActionTypes.INCREMENT) || (action.type === ActionTypes.DECREMENT)) {
        AppDispatcher.waitFor([CounterStore.dispatchToken])
        SummaryStore.emitChange();
    }
})

export default SummaryStore;


