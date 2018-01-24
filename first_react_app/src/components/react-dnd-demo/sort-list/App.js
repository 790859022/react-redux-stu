import React, {Component} from 'react';
import './style.less'
import List from './List';

const data = [
    {
        id: 1,
        text: 'Write a cool JS library',
    },
    {
        id: 2,
        text: 'Make it generic enough',
    },
    {
        id: 3,
        text: 'Write README',
    },
    {
        id: 4,
        text: 'Create some examples',
    },
    {
        id: 5,
        text:
            'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
        id: 6,
        text: '???',
    },
    {
        id: 7,
        text: 'PROFIT',
    },
    {
        id: 8,
        text: 'PROFIT-8888888888888888888',
    },
    {
        id: 9,
        text: 'PROFIT-hsioewbgiewjirjewiojrioejrieqj',
    },
    {
        id: 10,
        text: 'PROFIT45678fgh',
    }
]

class App extends Component {
    render() {
        return (
            <List data={data}/>
        )
    }
}

export default App

