import React from 'react'
import AddToDo from './Component/AddToDo'
import { Provider } from 'react-redux'
import { store } from './Store/store'
import Todo from './Component/Todo'


function Redux() {
    return (
        <Provider store={store}>
            <div>To Do List With Redux ToolKit</div>
            <AddToDo/>
            <Todo/>
        </Provider>
    )
}

export default Redux