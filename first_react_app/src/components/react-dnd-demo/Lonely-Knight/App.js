import React, {Component} from 'react';
import Board from './Board';
import {observe} from './Game';

import './app.less'

export default class App extends Component {
    state = {
        x: 0,
        y: 0
    }

    componentDidMount() {
        observe(([x, y]) => {
            this.setState({
                x,
                y
            })
        });
    }

    render() {
        const {x, y} = this.state;
        return (
            <Board knightPosition={[x, y]}/>
        )
    }
}