import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function uiReducer (state = initialState.ui, action) {
  switch (action.type) {
    case types.SET_IS_DATA_READY:
      return {
        ...state,
        isDataReady: action.payload
      }

    case types.SET_IS_SAVED:
      return {
        ...state,
        isDataSaved: action.payload
      }

    case types.SET_ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload
      }

    case types.SET_NUMBER_OF_AJAX_CALLS:
      const newNumber = state.numberOfAjaxRequests + action.payload
      return {
        ...state,
        numberOfAjaxRequests: newNumber
      }

    default:
      return state
  }
}
