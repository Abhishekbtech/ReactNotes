import React from 'react'
import ChildCTP from './ChildCTP'

function ParentCTP() {
    const information = 'i am getting value from the Parent'

    const childCommunicatorHandler = (info) => {
        console.log(info, "Reacived By Parent");
    }

    return (
        <>
            <h1>ParentCTP</h1>
            <ChildCTP info={information} name={'abhishek'}  childCommunicatorHandler={childCommunicatorHandler}/>
        </>
        
    )
}

export default ParentCTP