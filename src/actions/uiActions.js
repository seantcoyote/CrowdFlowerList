import * as types from './actionTypes'

export const setIsDataReady = (isReady) => ({
  type: types.SET_IS_DATA_READY,
  payload: isReady
})

export const setDataLoadingError = (isError) => ({
  type: types.SET_DATA_LOADING_ERROR,
  payload: isError
})

export const updateNumberOfAjaxCalls = (numberOfChange) => ({
  type: types.UPDATE_NUMBER_OF_AJAX_CALLS,
  payload: numberOfChange
})
