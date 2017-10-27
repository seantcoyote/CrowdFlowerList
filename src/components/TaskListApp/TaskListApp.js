import React, {Component} from 'react'
import {object, array, bool} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import Radium from 'radium'
import * as uiActions from '../../actions/uiActions'
import * as taskActions from '../../actions/taskActions'
import uuidV4 from 'uuid/v4'
import TaskListHeader from '../TaskListHeader'
import TaskList from '../TaskList'
import StatusAlert from '../StatusAlert'
import Spinner from '../Spinner'
import Message from '../Message'
import {loadErrorMessage} from '../../constants'
import defaultStyles from './styles'

class TaskListApp extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isAlertOpen: true
    }
  }

  componentWillMount () {
    this.props.taskActions.loadTasks().then(() => {
      this.props.uiActions.setLoadError(false)
      this.props.uiActions.setDataReady(true)
      this.props.uiActions.setDataSaved(true)
    }).catch((err) => {
      this.props.uiActions.setLoadError(true)
      this.props.uiActions.setDataReady(false)
      this.props.uiActions.setDataSaved(false)
    })
  }

  componentDidUpdate () {
    // Add new task if none exists
    if (!this.props.loadError && this.props.taskIds.length < 1) {
      this.addTask()
    }
    this.giveNewTaskFocus()
  }

  giveNewTaskFocus () {
    const {tasks, taskIds} = this.props
    const newestTaskId = taskIds[0]

    if (tasks[newestTaskId] && tasks[newestTaskId].title.length < 1) {
      const el = document.getElementById(newestTaskId)
      if (el) {el.focus()}
    }
  }

  cleanTasks = () => {
    // Delete tasks w/no title or only whitespace in title
    const {tasks, taskIds} = this.props
    taskIds.forEach((taskId) => {
      if ((tasks[taskId] && tasks[taskId].title.length === 0) ||
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
    this.props.uiActions.setDataSaved(false)
    this.giveNewTaskFocus()
  }

  updateTask = (e) => {
    this.props.taskActions.updateTask(e.target.id, e.target.value)
    this.props.uiActions.setDataSaved(false)
  }

  deleteTask = (e) => {
    this.props.taskActions.deleteTask(e.target.id)
    this.props.uiActions.setDataSaved(false)
}

  saveTasks = () => {
    this.cleanTasks()
    this.props.taskActions.saveTasks({
      tasks: this.props.tasks
    }).then(() => {
      this.openAlert(this.closeAlert)
      this.props.uiActions.setDataSaved(true)
    }).catch((err) => {
      this.openAlert()
      this.props.uiActions.setDataSaved(false)
    })
  }

  openAlert = () => {
    this.setState({isAlertOpen: true})
  }

  closeAlert = () => {
    this.setState({isAlertOpen: false})
  }

  render() {
    return (
      <div style={{...defaultStyles.base, ...this.props.style}}>
        <header style={defaultStyles.pageHeader}>&nbsp;</header>

        <div style={defaultStyles.taskListPane}>
          <TaskListHeader
            addTask={this.addTask}
            saveTasks={this.saveTasks}
            dataReady={this.props.dataReady}
            dataSaved={this.props.dataSaved}
          />

          {this.props.loadError &&
            <Message style={{color: 'red'}}>{loadErrorMessage}</Message>
          }

          {this.props.dataReady &&
            <TaskList
              tasks={this.props.tasks}
              taskIds={this.props.taskIds}
              updateTask={this.updateTask}
              deleteTask={this.deleteTask}
              cleanTasks={this.cleanTasks}
            />
          }

          {!this.props.dataReady && !this.props.loadError &&
            <Spinner />
          }
        </div>

        <StatusAlert
          dataSaved={this.props.dataSaved}
          isAlertOpen={this.state.isAlertOpen}
          openAlert={this.openAlert}
          closeAlert={this.closeAlert}
        />
      </div>
    )
  }
}

TaskListApp.propTypes = {
  dataReady: bool.isRequired,
  dataSaved: bool.isRequired,
  loadError: bool.isRequired,
  tasks: object.isRequired,
  taskIds: array.isRequired,
  taskActions: object.isRequired,
  uiActions: object.isRequired,
  style: object
}

const mapStateToProps = (state) => ({
  dataReady: state.ui.dataReady,
  dataSaved: state.ui.dataSaved,
  loadError: state.ui.loadError,
  tasks: state.tasksById,
  taskIds: state.taskIds
})

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  uiActions: bindActionCreators(uiActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Radium(TaskListApp))
