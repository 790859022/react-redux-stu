import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import * as Status from './status'

const Weather = ({status, cityName, weather, lowestTemp, highestTemp,test}) => {
    // console.log('weather render');
    switch (status) {
        case Status.LOADING: {
            return <div>天气信息请求中...</div>
        }
        case Status.SUCCESS: {
            return (<div>
                {cityName} {weather} 最低气温 {lowestTemp} 最高气温 {highestTemp} （test:{test})
            </div>)
        }
        case Status.FAILURE: {
            return <div>天气信息加载失败</div>
        }
        default: {
            throw new Error('unexpected status ' + status);
        }
    }
}
Weather.propTypes = {
    status: PropTypes.string.isRequired,
    cityName: PropTypes.string,
    weather: PropTypes.string,
    lowestTemp: PropTypes.string,
    highestTemp:PropTypes.string
}

const mapStateToProps = (state) => {
    const weatherData = state.weather;
    // console.log(state)
    return {
        status: weatherData.status,
        cityName: weatherData.city,
        weather: weatherData.weather,
        lowestTemp: weatherData.temp1,
        highestTemp: weatherData.temp2,
        test:weatherData.test
    }
}

export default connect(mapStateToProps)(Weather)