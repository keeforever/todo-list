import { ADD_TASK, EDIT_TASK, UPDATE_TASKS } from "../utils/constants"
import moment from "moment/moment"
import { setLocalStorage } from "../utils/localStorage";

export const todoReducer = (state, action) => {
  const todayDate = moment().format('LL');

  function updateFocusTitle(todayTasks){
    let timeLine = []
    todayTasks.forEach(({time,id, taskStatus, task})=>{
      if(!time || taskStatus === "completed") return
      const isPM = time.split(" ")[1] === 'pm'
      time = time.split(' ')[0].split(":")
      
      if(isPM){
        time = `${Number(time[0]) + 12}.${time[1]}`
        timeLine.push({time: Number(time),id,task})
        return
      }
      
      time = `${time[0]}.${time[1]}`
      timeLine.push({time: Number(time),id,task})
    })
    
    timeLine = timeLine.sort((a,b)=>a.time - b.time)
    return timeLine[0]?.task ? timeLine[0].task : '"Hark work pays off."'

  }

  function updateTasks(tasks){
    
    let obj = {}
    let scheduledTasks = tasks.forEach((task) => {
      obj[task.date] = obj.hasOwnProperty(task.date)  ? [...obj[task.date]] : []
      obj[task.date].push(task)
    })
    
    scheduledTasks = Object.keys(obj).map((key)=>{
      return {
        date:key,
        tasks: obj[key]
      }
    })
    
    let todayTasks = tasks.filter((task)=>{
      return task.date === todayDate
    })

    let todoTasks = todayTasks.filter((task)=>{
      return task.taskStatus === "todo"
    })

    let inProgressTasks = todayTasks.filter((task)=>{
      return task.taskStatus === "in-progress"
    })

    let completedTasks = todayTasks.filter((task)=>{
      return task.taskStatus === "completed"
    })
    const state = {
      tasks,
      todoTasks,
      inProgressTasks,
      completedTasks,
      scheduledTasks, 
      todayTasks, 
      focusTitle: updateFocusTitle(todayTasks)
    }

    setLocalStorage({item:'ls-state',value: state})
    return state
  }


  if (action.type === UPDATE_TASKS) {
    return { ...state, ...updateTasks(state.tasks)}
  }


  if (action.type === ADD_TASK) {
    const tasks = [...state.tasks, action.payload]
    return { ...state, tasks, ...updateTasks(tasks) }
  }

  if (action.type === EDIT_TASK) {
    const {id,taskStatus} = action.payload
    let tasks = state.tasks
    tasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, taskStatus }
      }
      return task
    })

    return { ...state, tasks, ...updateTasks(tasks) }
  }

  return state;
}