import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/Todoslice";

const store=configureStore({
    reducer:todoReducer
})
export default store