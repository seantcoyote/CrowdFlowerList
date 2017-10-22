import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function uiReducer (state = initialState.ui, action) {
  switch (action.type) {
    case types.ADD_TASK:
      return {
        ...state,
        tasks: action.payload
      }

    case types.UPDATE_TASK:
      return {
        ...state,
        tasks: action.payload
      }

    case types.DELETE_TASK:
      return {
        ...state,
        tasks: action.payload
      }

    default:
      return state
  }
}
