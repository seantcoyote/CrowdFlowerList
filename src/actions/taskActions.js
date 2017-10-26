import * as types from './actionTypes.js'
import {updateNumberOfAjaxCalls} from './uiActions'
import {fetchTasks, sendTasks} from '../services/tasks'

const loadTasksSuccess = (tasks) => ({
  type: types.LOAD_TASKS_SUCCESS,
  payload: {...tasks}
})

const saveTasksSuccess = (tasks) => ({
  type: types.SAVE_TASKS_SUCCESS,
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
    dispatch(updateNumberOfAjaxCalls(1))

    fetchTasks()
    .then((data) => {
      dispatch(loadTasksSuccess((data && data.tasks) || null))
      dispatch(updateNumberOfAjaxCalls(-1))
      resolve()
    })
    .catch((error) => {
      dispatch(updateNumberOfAjaxCalls(-1))
      reject(error)
    })
  })
}

export const saveTasks = (tasks) => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(updateNumberOfAjaxCalls(1))

    sendTasks(tasks)
    .then((response) => {
      console.log('response:', response)
      // dispatch(saveTasksSuccess((saveTasksSuccess && saveTasksSuccess) || null))
      dispatch(updateNumberOfAjaxCalls(-1))
      resolve()
    })
    .catch((error) => {
      dispatch(updateNumberOfAjaxCalls(-1))
      reject(error)
    })
  })
}
