import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

export default function tasksReducer (state = initialState.tasks, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.payload.tasks

    case types.SAVE_TASKS_SUCCESS:
      return action.payload.tasks

    default:
      return state
  }
}
