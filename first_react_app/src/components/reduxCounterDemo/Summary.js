import React, {Component} from 'react';

import store from './Store';


class Summery extends Component {
    getOwnState = () => {
        const state = store.getState();
        let sum = 0;
        for (const key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key];
            }
        }
        return {
            sum: sum
        }
    }
    state = this.getOwnState()

    componentDidMount() {
        store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.sum
    }



    onChange = () => {
        this.setState(this.getOwnState());
    }

    render() {
        const {sum} = this.state;
        return (
            <div>Total Count:{sum}</div>
        )
    }
}

export default Summery;