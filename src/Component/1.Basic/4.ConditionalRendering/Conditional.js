import React,{useState} from 'react'
import Change from './Change';

function Conditional() {
    const [value, setValue] =  useState(false);

    return (
        <>
            <div>Conditional</div>
            <button onClick= {() => setValue(true)} style={{marginRight:'10'}}>Day</button>
            <button onClick= {() => setValue(false)}>Night</button>

            {value === false && <Change color={"black"}/>}
            {value === true && <Change color={"yellow"}/>}
        </>
        
    )
}

export default Conditional