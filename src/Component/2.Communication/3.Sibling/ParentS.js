import React, {useState} from 'react'
import ChildS1 from './ChildS1'
import ChildS2 from './ChildS2'

function ParentS() {
    const [info, setInfo] = useState("");
    const child1ToParentCommunicator = (infoFromChild1) => {
        console.log("PARENT RECIEVED::::: ", infoFromChild1);
        setInfo(infoFromChild1);
    };

    return (
        <>
            <h1>ParentS</h1>
            <ChildS1 handler={child1ToParentCommunicator}/>
            <ChildS2 info={info} />
        </>
        
    )
}

export default ParentS