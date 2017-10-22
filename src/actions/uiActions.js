import * as types from './actionTypes'

export const setIsDataReady = (isReady) => ({
  type: types.SET_IS_DATA_READY,
  payload: isReady
})

export const setDataLoadingError = (errorMessage) => ({
  type: types.SET_DATA_LOADING_ERROR,
  payload: errorMessage
})

export const updateNumberOfAjaxCalls = (numberOfChange) => ({
  type: types.UPDATE_NUMBER_OF_AJAX_CALLS,
  payload: numberOfChange
})

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
