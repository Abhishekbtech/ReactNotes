import React, { useState } from 'react'
import ChildCTP from './ChildCTP'

function ParentCTP() {
    const [childData, setChildData] = useState('')

    const childCommunicatorHandler = (info) => {
        console.log(info, "Reacived By Parent");
        setChildData(info)
    }

    return (
        <>
            <h1>Child to parent Communication</h1>
            <h3>{childData}</h3>
            <ChildCTP childCommunicatorHandler={childCommunicatorHandler}/>
        </>
        
    )
}

export default ParentCTP