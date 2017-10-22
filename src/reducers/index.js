import {combineReducers} from 'redux'
import tasks from './tasksReducer.js'
import ui from './uiReducer.js'

const rootReducer = combineReducers({
  tasks,
  ui
})

export default rootReducer
