import React from 'react';

import Counter from './Counter';
import Summary from './Summary';

const CounterPanel = ()=>{
    return(
        <div>
            <Counter caption="First" />
            <Counter caption="Second" />
            <Counter caption="Third" />
            <Summary />
        </div>
    )
}

export default CounterPanel;