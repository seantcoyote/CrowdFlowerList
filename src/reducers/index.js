import {combineReducers} from 'redux'
import tasksById, {taskIds} from './taskReducer.js'
import ui from './uiReducer.js'

const rootReducer = combineReducers({
  tasksById,
  taskIds,
  ui
})

export default rootReducer
