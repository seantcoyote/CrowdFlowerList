import * as types from '../actions/actionTypes.js'
import initialState from './initialState'

const orderIdsByDate = (tasks) => {
  const ids = Object.keys(tasks)
  return ids.sort((a, b) => {
    return tasks[a].dateCreated - tasks[b].dateCreated
  }).reverse()
}

export const taskIds = (state = initialState.taskIds, action) => {
  let newState = []

  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      const orderedIds = orderIdsByDate(action.payload)
      return orderedIds

    case types.ADD_TASK:
      newState = [...state]
      newState.unshift(action.payload.id)
      return newState

    case types.DELETE_TASK:
      const i = state.indexOf(action.payload)
      newState = [...state]
      newState.splice(i, 1)
      return newState

    default:
      return state
  }
}

export default function tasksById (state = initialState.tasksById, action) {
  switch (action.type) {
    case types.LOAD_TASKS_SUCCESS:
      return action.payload

    case types.ADD_TASK:
      // Only allow 1 new task without a title
      const newTaskAlreadyExists = Object.keys(state).filter((taskId) => state[taskId].title.length < 1)
      if (newTaskAlreadyExists.length) {
        return state
      }

      return {
        ...state,
        [action.payload.id]: action.payload
      }

    case types.UPDATE_TASK:
      const id = action.payload.id
      const updatedTask = {
        ...state[id],
        title: action.payload.value,
        lastUpdated: Date.now()
      }
      return {
        ...state,
        [id]: updatedTask
      }

    case types.DELETE_TASK:
      const newState = {...state}
      delete newState[action.payload]
      return newState

    default:
      return state
  }
}
