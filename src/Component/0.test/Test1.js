import React, { Suspense, lazy } from 'react'
// import Test2 from './Test2'

const Test2 = lazy( ()=> import('./Test2'))

function Test1() {
    return (
        <>
            <h1>test1</h1>
            <Suspense fallback = {<h1>loading the data</h1>}>
                <Test2/>
            </Suspense>
        </>
    )
}

export default Test1