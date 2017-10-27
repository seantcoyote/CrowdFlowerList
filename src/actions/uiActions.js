import * as types from './actionTypes'

export const setDataReady = (isReady) => ({
  type: types.SET_DATA_READY,
  payload: isReady
})

export const setDataSaved = (isSaved) => ({
  type: types.SET_DATA_SAVED,
  payload: isSaved
})

export const setLoadError = (isError) => ({
  type: types.SET_LOAD_ERROR,
  payload: isError
})

export const setNumberOfAjaxCalls = (change) => ({
  type: types.SET_NUMBER_OF_AJAX_CALLS,
  payload: change
})
