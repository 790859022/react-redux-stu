import React from 'react';
import {view as TopMenu} from '../TopMenu';

const App = ({children})=>{
    return(
        <div>
            <TopMenu />
            <div>{children}</div>
        </div>
    )
}

export default App;