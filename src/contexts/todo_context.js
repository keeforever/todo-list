import { createContext, useContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers";
import { ADD_TASK, EDIT_TASK, UPDATE_TASKS } from "../utils/constants";
import { getLocalStorage } from "../utils/localStorage";

// mock data
import {data} from './data';

// todo context
const TodoContext = createContext({})

const initialState = {
  tasks: [] ,
  todayTasks: [],
  todoTasks: [],
  inProgressTasks: [],
  completedTasks:[],
  scheduledTasks: [],
  focusTitle: ''
}

const TodoContextProvider = ({ children }) => {
  const lsState = getLocalStorage({item:'ls-state'})

  const [state, dispatch] = useReducer(todoReducer, lsState ? lsState : initialState)

  const addTask = (task)=>{
    dispatch({type: ADD_TASK, payload: task})
  }

  const editTask = ({id,taskStatus})=>{
    dispatch({type: EDIT_TASK, payload: {id,taskStatus}})
  }

  useEffect(() => {
    dispatch({type: UPDATE_TASKS})
  },[])

  return (
    <TodoContext.Provider 
      value={{
        ...state,
        addTask,
        editTask
      }}>
      {children}
    </TodoContext.Provider>
  )
}

const useTodoContext = () => {
  return useContext(TodoContext)
}

export {TodoContextProvider, useTodoContext}

