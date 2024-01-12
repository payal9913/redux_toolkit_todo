import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtodo } from '../features/todo/Todoslice'
import './addtodo.css'

const Addtodo = () => {
    const [input,setinput]=useState('')
    const dispatch=useDispatch()

    const addtodohandler=(e)=>{
        e.preventDefault()
        dispatch(addtodo(input))
        setinput('')
    }

  return (
    <form action="" onSubmit={addtodohandler}>
        <input type="text" placeholder="Enter a todo.." value={input} onChange={(e)=>setinput(e.target.value)}/>
        <button className='btn' type='submit'>Add Todo</button>
    </form>
  )
}

export default Addtodo