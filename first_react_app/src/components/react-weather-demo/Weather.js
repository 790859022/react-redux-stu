import React, {Component} from 'react';

class Weather extends Component {
    state = {
        weather: null
    }

    componentDidMount() {
        // const cityCode = 'dingzhi/101010100.html?_=1515573372529'
        const cityCode = '101010100';
        // const apiUrl = `/dingzhi/${cityCode}.html?_=1515573372529`;
        const apiUrl = `/data/cityinfo/101010100.html`;
        fetch(apiUrl).then(response => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status);
            }
            response.json().then(responseJson => {
                console.log(responseJson)
                this.setState({
                    weather: responseJson.weatherinfo
                })
            }).catch(e => {
                this.setState({
                    weather: null
                })
            })
        }).catch(e => {
            console.log(e)
            this.setState({
                weather: null
            })
        })
    }

    render() {
        const {weather} = this.state;

        if (!weather) {
            return <div>暂无数据</div>
        }

        const {city, weather:wt, temp1, temp2} = weather;
        return (
            <div>
                {city} {wt} 最低气温 {temp1} 最高气温 {temp2}
            </div>
        )

    }
}

export default Weather;