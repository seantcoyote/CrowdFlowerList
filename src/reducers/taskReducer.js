import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function taskReducer (state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.payload

      case types.SAVE_TASKS_SUCCESS:
        return action.payload

      case types.ADD_TASK:
        return {
          ...state,
          [action.payload.id]: action.payload
        }

      case types.UPDATE_TASK:
      return {
        ...state,
        [action.payload.id]: action.payload
      }

      case types.DELETE_TASK:
      const newState = state.filter((task) => task.id !== action.payload.id)
      return newState

    default:
      return state
  }
}
