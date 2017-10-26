import React, { Component } from 'react'
import {object, array, bool, string} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as taskActions from '../../actions/taskActions'
import uuidV4 from 'uuid/v4'
import TaskListHeader from '../TaskListHeader'
import TaskList from '../TaskList'
import Message from '../Message'
import {loadErrorMessage, saveErrorMessage, saveSuccessMessage} from '../../constants'
import defaultStyles from './styles'

class TaskListApp extends Component {
  componentWillMount () {
    this.props.taskActions.loadTasks().then(() => {
      this.props.uiActions.setErrorMessage('')
      this.props.uiActions.setIsDataReady(true)
    }).catch((err) => {
      this.props.uiActions.setErrorMessage(loadErrorMessage)
    })
  }

  componentDidUpdate () {
    const {tasks, errorMessage} = this.props
    // Add new task if none exist
    if (!errorMessage && Object.keys(tasks).length < 1) {
      this.addTask()
    }
    this.giveNewTaskFocus()
  }

  // const taskIdsByDate = getTaskIdsByDate()

  giveNewTaskFocus () {
    const {tasks} = this.props
    const newestTaskId = Object.keys(tasks).reduce((accId, taskId) => {
      const currentTask = tasks[taskId]
      const newestTask = tasks[accId] || ''
      return accId && newestTask.dateCreated > currentTask.dateCreated ? accId : taskId
    }, '')
    if (tasks[newestTaskId] && tasks[newestTaskId].title.length < 1) {
      document.getElementById(newestTaskId).focus()
    }
  }

  cleanTasks = () => {
    // Delete tasks w/no title or only whitespace in title
    const {tasks} = this.props
    Object.keys(tasks).forEach((taskId) => {
      if (tasks[taskId].title.length === 0 ||
        (tasks[taskId].title.length > 0 && tasks[taskId].title.trim().length < 1)
      ) {
        this.props.taskActions.deleteTask(taskId)
      }
    })
  }

  addTask = () => {
    const newTask = {
      id: uuidV4(),
      dateCreated: Date.now(),
      lastUpdated: Date.now(),
      title: ''
    }
    this.props.taskActions.addTask(newTask)
    this.giveNewTaskFocus()
  }

  updateTask = (e) => {
    this.props.taskActions.updateTask(e.target.id, e.target.value)
  }

  deleteTask = (e) => {
    this.props.taskActions.deleteTask(e.target.id)
}

  saveTasks = () => {
    console.log('saveTasks called:', this.props.tasks)
    this.cleanTasks()
    this.props.taskActions.saveTasks({
      tasks: this.props.tasks
    }).then(() => {
      console.log('saveTasks:', saveSuccessMessage)
      this.props.uiActions.setErrorMessage('')
    }).catch((err) => {
      console.log('saveTasks:', saveErrorMessage)
      // this.props.uiActions.setErrorMessage(saveErrorMessage)
    })
  }

  render() {
    return (
      <div style={{...defaultStyles.base, ...this.props.style}}>
        <header style={defaultStyles.pageHeader}>&nbsp;</header>
        <div style={defaultStyles.taskListPane}>
          <TaskListHeader
            addTask={this.addTask}
            saveTasks={this.saveTasks}
          />

          {this.props.errorMessage &&
            <Message style={{color: 'red'}}>{this.props.errorMessage}</Message>
          }

          <TaskList
            tasks={this.props.tasks}
            taskIds={this.props.taskIds}
            updateTask={this.updateTask}
            deleteTask={this.deleteTask}
            cleanTasks={this.cleanTasks}
          />
        </div>
      </div>
    )
  }
}

TaskListApp.propTypes = {
  isDataReady: bool.isRequired,
  errorMessage: string,
  tasks: object.isRequired,
  taskIds: array,
  taskActions: object.isRequired,
  uiActions: object.isRequired,
  style: object
}

const mapStateToProps = (state) => ({
  isDataReady: state.ui.isDataReady,
  errorMessage: state.ui.errorMessage,
  tasks: state.tasksById,
  taskIds: state.taskIds
})

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  uiActions: bindActionCreators(uiActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListApp)
