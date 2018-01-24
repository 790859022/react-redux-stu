import React, {Component} from 'react';
import PropTypes from 'prop-types';
import * as Actions from './Actions';

const Counter = (props) => {
    const {caption, value, increment, decrement} = props;
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <span>{caption} count:{value}</span>
        </div>
    )
}

class CounterContainer extends Component {


    getOwnState = () => {
        return {
            // value: store.getState()[this.props.caption]
            value: this.context.store.getState()[this.props.caption]
        }

    }
    state = this.getOwnState()

    componentDidMount() {
        this.context.store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        this.context.store.unsubscribe(this.onChange)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextState.value !== this.state.value) || (nextProps.caption !== this.props.caption)
    }

    onChange = () => {
        this.setState(this.getOwnState())
    }
    increment = () => {
        this.context.store.dispatch(Actions.increment(this.props.caption));
    }
    decrement = () => {
        this.context.store.dispatch(Actions.decrement(this.props.caption));
    }

    render() {
        console.log('render')
        const {value} = this.state;
        const {caption} = this.props;
        return (
            <Counter caption={caption} value={value} increment={this.increment} decrement={this.decrement}/>
        )
    }
}

CounterContainer.contextTypes = {
    store: PropTypes.object
}

export default CounterContainer;


