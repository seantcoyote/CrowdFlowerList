import * as types from './actionTypes.js'
import {updateNumberOfAjaxCalls} from './uiActions'
import {getTasks} from '../services/tasks'

const loadTasksSuccess = (tasks) => ({
  type: types.LOAD_TASKS_SUCCESS,
  payload: {tasks}
})

export const loadTasks = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(updateNumberOfAjaxCalls(1))

    getTasks()
    .then((data) => {
      dispatch(loadTasksSuccess(data.tasks))
      dispatch(updateNumberOfAjaxCalls(-1))
      resolve()
    })
    .catch((error) => {
      dispatch(updateNumberOfAjaxCalls(-1))
      reject(error)
    })
  })
}

export const addTask = (task) => ({
  type: types.ADD_TASK,
  payload: task
})

export const updateTask = (task) => ({
  type: types.UPDATE_TASK,
  payload: task
})

export const deleteTask = (task) => ({
  type: types.DELETE_TASK,
  payload: task
})
