import React, {Component} from 'react';
import PropTypes from 'prop-types';

const Summary = (props) => {
    const {sum} = props;
    return (
        <div>
            <div>Total Count: {sum}</div>
        </div>
    )
}

class SummaryContainer extends Component {
    getOwnState = () => {
        // const state = store.getState();
        const state = this.context.store.getState();

        let sum = 0;

        for (let key in state) {
            if (state.hasOwnProperty(key)) {
                sum += state[key]
            }
        }
        return {
            sum
        }
    }
    state = this.getOwnState()

    componentDidMount() {
        this.context.store.subscribe(this.onChange)
    }

    componentWillUnmount() {
        this.context. store.unsubscribe(this.onChange)
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextState.sum !== this.state.sum
    }

    onChange = () => {
        this.setState(this.getOwnState())
    }

    render() {
        const {sum} = this.state;
        return (
            <Summary sum={sum}/>
        )
    }
}
SummaryContainer.contextTypes = {
    store: PropTypes.object
}
export default SummaryContainer;