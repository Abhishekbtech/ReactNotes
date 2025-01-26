import React, { useState } from 'react'
import ChildPTC from './ChildPTC'

function ParentPTC() {
    const [showChild, setShowChild] = useState(false)
    const information = "i am getting value from Parent"

    const handleClick = () => {
        setShowChild(!showChild)
    }

    return (
        <>  
            <h1>Parent to Child Communication</h1>
            <button onClick={handleClick}>
                {showChild ? 'Hide Child' : 'Show Child'}
            </button>
            {showChild && <ChildPTC info={information}/>}
        </>
    )  
}

export default ParentPTC