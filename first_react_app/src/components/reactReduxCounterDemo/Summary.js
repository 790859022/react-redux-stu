import React from 'react';
import {connect} from 'react-redux';

const Summary = (props) => {
    const {sum} = props;
    return (
        <div>
            Total count:{sum}
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {
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

export default connect(mapStateToProps)(Summary)