import {combineReducers} from 'redux'
import tasks from './taskReducer.js'
import ui from './uiReducer.js'

const rootReducer = combineReducers({
  tasks,
  ui
})

export default rootReducer
