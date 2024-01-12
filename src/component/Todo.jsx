import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removetodo } from '../features/todo/Todoslice'
import './Todo.css'
const Todo = () => {

    const dispatch = useDispatch()
    const todo = useSelector(state => state.todos)

    return (
        <>
            <div style={{ fontWeight: "700", fontSize: "32px" }}>Todos</div>
            {
                todo.map((todo) => (
                    <div className="btn-container">
                        <li className='list' key={todo.id}>{todo.text}
                            {/* <button className=" btn-up del-btn" onClick={() => dispatch(update(todo.id))}><i class="fa fa-edit"></i></button> */}
                            <button className="  del-btn" onClick={() => dispatch(removetodo(todo.id))}><i class="fa fa-trash"></i></button>

                        </li>
                    </div>
                ))
            }
        </>
    )
}

export default Todo