import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState={
    todos:[{id:1,text:"Hello Payal..."}],
}
const todoslice=createSlice({
    name:"todo",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removetodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>todo.id!==action.payload)
        },
        // updatetodo:(state,action)=>{
        //     state.todos=state.todos.find((todo)=>todo.id==action.payload)
        // }
    },
});

export const{addtodo,removetodo,updatetodo} = todoslice.actions;

export default todoslice.reducer