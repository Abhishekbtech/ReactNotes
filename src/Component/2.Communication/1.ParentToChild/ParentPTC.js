import React from 'react'
import ChildPTC from './ChildPTC'

function ParentPTC() {
    const infomation = "i am getting value from Parent"
    return (
        <>  
            <h1>Parent to Child Communication</h1>
            <ChildPTC info={infomation}/>
        </>
    )  
}

export default ParentPTC