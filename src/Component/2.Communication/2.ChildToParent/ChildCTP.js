import React from 'react'

// childCommunicatorHandler is a FUNCTION of PARENT If I call childCommunicatorHandler from CHIld, I am actually calling the PARENT function THIS IS EXACTLY HOW THE CHILD WILL COMMUNICATE.

function ChildCTP(props) {
    const { info, name, childCommunicatorHandler } = props
    return (
        <>
            <div>ChildCTP {name} {info} 
                <div>
                    <button onClick={() => { childCommunicatorHandler("Hello i am from Child  ===>  ")}}>
                        Emergency Infomation
                    </button>
                </div>
            </div>
        </>
    )
}

export default ChildCTP