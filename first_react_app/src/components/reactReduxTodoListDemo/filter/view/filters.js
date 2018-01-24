import React from 'react';
import {FilterTypes} from '../../constants';
import Link from './link';





const Filters =()=>{
    console.log('FIlter')
    return(
        <div className="filters">
            <Link filter={FilterTypes.ALL}>{FilterTypes.ALL}</Link>
            <Link filter={FilterTypes.COMPLETED}>{FilterTypes.COMPLETED}</Link>
            <Link filter={FilterTypes.UNCOMPLETED}>{FilterTypes.UNCOMPLETED}</Link>
        </div>
    )
}

export default Filters;
