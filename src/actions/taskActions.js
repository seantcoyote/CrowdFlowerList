import * as types from './actionTypes.js'
import {updateNumberOfAjaxCalls, setDataLoadingError} from './uiActions'
import {fetchTasks} from '../services/tasks'

const loadTasksSuccess = (tasks) => ({
  type: types.LOAD_TASKS_SUCCESS,
  payload: {tasks}
})

export const loadTasks = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    dispatch(updateNumberOfAjaxCalls(1))

    fetchTasks()
    .then((data) => {
      console.log('data:', data)
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
