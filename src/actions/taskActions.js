import * as types from './actionTypes.js'
import {setNumberOfAjaxCalls, setIsSaved} from './uiActions'
import {fetchTasks, sendTasks} from '../services/tasks'

const loadTasksSuccess = (tasks) => ({
  type: types.LOAD_TASKS_SUCCESS,
  payload: {...tasks}
})

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: task
})

export const updateTask = (id, value) => ({
  type: types.UPDATE_TASK,
  payload: {id, value}
})

export const deleteTask = (id) => ({
  type: types.DELETE_TASK,
  payload: id
})

export const loadTasks = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(setNumberOfAjaxCalls(1))

    fetchTasks()
    .then((data) => {
      dispatch(loadTasksSuccess((data && data.tasks) || null))
      dispatch(setNumberOfAjaxCalls(-1))
      resolve()
    })
    .catch((error) => {
      dispatch(setNumberOfAjaxCalls(-1))
      reject(error)
    })
  })
}

export const saveTasks = (tasks) => (dispatch) => {
  return new Promise((resolve, reject) => {
    sendTasks(tasks)
    .then((response) => {
      console.log('saveTasks success:', response)
      dispatch(setIsSaved(true))
      resolve()
    })
    .catch((error) => {
      console.log('saveTasks error:', error)
      dispatch(setIsSaved(false))
      reject(error)
    })
  })
}
