import * as types from './actionTypes.js'
import {updateNumberOfAjaxCalls} from './uiActions'
import {setLocalStorage, getLocalStorage} from '../services/localStorage'
import {getTasks, isTaskListCurrent} from '../services/tasks'

const loadTasksSuccess = (tasks) => ({
  type: types.LOAD_TASKS_SUCCESS,
  payload: {tasks}
})

export const loadTasks = () => (dispatch) => {
  return new Promise((resolve, reject) => {
    if (window.localStorage && localStorage['CrowdFlowerTaskList'] && isTaskListCurrent(courseID)) {
      // TODO: implement
      return
  })
}
