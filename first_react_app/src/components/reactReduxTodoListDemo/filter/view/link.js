import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';

const Link = (props) => {

    // console.log('link')
    const {active, children,onClick} = props;
    return (
        <a className={active ? 'active' : '' } onClick={onClick}>{children}</a>
    )
}

const mapStateToProps = (state, ownProps) => {
    // console.log(state)
    // console.log(ownProps)
    return {
        active: state.filter === ownProps.filter
    }
}
const mapDispatchToProps = (dispatch,ownProps)=>{
    return{
        onClick:()=>{
            dispatch(actions.setFilter(ownProps.filter))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Link)