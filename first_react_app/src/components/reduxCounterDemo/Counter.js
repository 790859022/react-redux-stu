import React, {Component} from 'react';
import * as Actions from './Actions';
import store from './Store';


class Counter extends Component {
    getOwnState = () => {
        return {
            value: store.getState()[this.props.caption]
        }
    }
    state = this.getOwnState()

    componentDidMount() {
        store.subscribe(this.onChange);
    }

    componentWillUnmount() {
        store.unsubscribe(this.onChange);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
    }

    onChange = () => {
        console.log('Counter onChange');
        this.setState(this.getOwnState());
    }

    onIncrement = () => {
        store.dispatch(Actions.increment(this.props.caption));
    }
    onDecrement = () => {
        store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        // console.log('Counter render')
        const {value} = this.state;
        const {caption} = this.props;
        return (
            <div>
                <button onClick={this.onIncrement}>+</button>
                <button onClick={this.onDecrement}>-</button>
                <span>{caption} count:{value}</span>
            </div>
        )
    }
}

export default Counter;