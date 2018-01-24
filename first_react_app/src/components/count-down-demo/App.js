import React, {Component} from 'react';
import CountDown from './CountDown';


class App extends Component {
    render() {
        return (
            <CountDown startCount={10}>
                {(count) => <div>{count}</div>}
            </CountDown>
        )
    }
}
export default App;