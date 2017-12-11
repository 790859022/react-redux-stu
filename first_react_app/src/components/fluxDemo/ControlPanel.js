import React, {Component} from 'react';
import CounterStore from "./CounterStore";
import SummaryStore from "./SummaryStore";
import * as Actions from './Actions'


class Counter extends Component {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
        this.onClickIncrementButton = this.onClickIncrementButton.bind(this);
        this.onClickDecrementButton = this.onClickDecrementButton.bind(this);

        this.state = {
            count: CounterStore.getCounterValues()[props.caption]
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.caption !== this.props.captions) || (nextState.count !== this.state.count);
    }

    componentDidMount() {
        CounterStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        console.log('Counter componentWillUnmount Function');
        CounterStore.removeChangeListener(this.onChange);
    }

    onChange() {
        console.log('Counter onChange Function')
        const newCount = CounterStore.getCounterValues()[this.props.caption];
        this.setState({count: newCount});
    }

    onClickIncrementButton() {
        console.log('Counter onClickIncrementButton Function')
        Actions.increment(this.props.caption);
    }

    onClickDecrementButton() {
        Actions.decrement(this.props.caption);
    }

    render() {
        const {caption} = this.props;
        return (
            <div>
                <button  onClick={this.onClickIncrementButton}>+</button>
                <button  onClick={this.onClickDecrementButton}>-</button>
                <span>{caption} count: {this.state.count}</span>
            </div>
        );
    }
}


class Summary extends Component {
    constructor(props) {
        super(props);

        this.onUpdate = this.onUpdate.bind(this);
        this.state = {
            sum: SummaryStore.getSummary()
        }
    }

    componentDidMount() {
        SummaryStore.addChangeListener(this.onUpdate)
    }

    componentWillUnmount() {
        SummaryStore.removeChangeListener(this.onUpdate)
    }

    onUpdate() {
        console.log('Summary onUpdate Function')
        this.setState({
            sum: SummaryStore.getSummary()
        })
    }

    render() {
        return (
            <div>Total Count: {this.state.sum}</div>
        );
    }
}


class ControlPanel extends Component {

    render() {
        return (
            <div>
                <Counter caption="First"/>
                <Counter caption="Second"/>
                <Counter caption="Third"/>
                <hr/>
                <Summary/>
            </div>
        );
    }
}

export default ControlPanel;