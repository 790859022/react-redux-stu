import React from 'react';
import {connect} from 'react-redux';
import * as Actions from './Actions';

const Counter = (props) => {
    const {caption, value ,increment,decrement} = props;
    return (
        <div>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <span>{caption} count:{value}</span>
        </div>
    )
}
const mapStateToProps = (state, ownProps) => {

    return {
        value: state[ownProps.caption]
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        increment(){
            dispatch(Actions.increment(ownProps.caption))
        },
        decrement(){
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Counter);