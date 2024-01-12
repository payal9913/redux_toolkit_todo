import { useState } from 'react'
import './App.css'
import Addtodo from './component/addtodo'
import Todo from './component/Todo'

function App() {
  
  return (
    <>
    <div className="app">
        <p> Your Todo List</p>
        <Addtodo/>
        <Todo/>
    </div>
    </>
  )
}

export default App
