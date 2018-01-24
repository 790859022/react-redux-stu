import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {actions as weatherActions} from '../weather/'

const CITY_CODES = {
    '北京': 101010100,
    '上海': 101020100,
    '广州': 101280101,
    '深圳': 101280601
};

class CitySelector extends Component {
    state = {}

    componentDidMount() {
        const defaultCity = Object.keys(CITY_CODES)[0];
        this.props.onSelectCity(CITY_CODES[defaultCity]);
    }

    onChange = (e) => {
        const cityCode = e.target.value;
        this.props.onSelectCity(cityCode)
    }

    render() {
        // console.log('city selector render')
        return (
            <div>
                <label htmlFor="">选择城市</label>
                <select onChange={this.onChange}>
                    {
                        Object.keys(CITY_CODES).map(item => <option key={item} value={CITY_CODES[item]}>{item}</option>)
                    }
                </select>
            </div>
        )
    }
}

CitySelector.propTypes = {
    onSelectCity: PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSelectCity: (cityCode) => {
            dispatch(weatherActions.fetchWeather(cityCode));
        }
    }
}

export default connect(null,mapDispatchToProps)(CitySelector)
