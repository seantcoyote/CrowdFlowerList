import React, { Component } from 'react'
import {object, bool, string} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as taskActions from '../../actions/taskActions'
import uuidV4 from 'uuid/v4'
import TaskListHeader from '../TaskListHeader'
import TaskList from '../TaskList'
import Message from '../Message'
import {loadErrorMessage, saveErrorMessage, saveSuccessMessage} from '../../constants'
import styles from './styles'

class TaskListApp extends Component {
  componentWillMount () {
    this.props.taskActions.loadTasks().then(() => {
      this.props.uiActions.setErrorMessage('')
      this.props.uiActions.setIsDataReady(true)
    }).catch((err) => {
      this.props.uiActions.setErrorMessage(loadErrorMessage)
    })
  }

  addTask = () => {
    const newTask = {
      id: uuidV4(),
      dateCreated: new Date(),
      title: 'Enter task'
    }
    console.log('addTask:', newTask)
    this.props.taskActions.addTask(newTask)
  }

  saveList = () => {
    console.log('saveList called')
    const id1 = uuidV4()
    const id2 = uuidV4()
    this.props.taskActions.saveTasks({
      tasks: {
        [id1]: {
          id: id1,
          title: 'Go surfing'
        },
        [id2]: {
          id: id2,
          title: 'Go surfing again'
        }
      }
    }).then(() => {
      console.log('saveList:', saveSuccessMessage)
      this.props.uiActions.setErrorMessage('')
    }).catch((err) => {
      console.log('saveList:', saveErrorMessage)
      // this.props.uiActions.setErrorMessage(saveErrorMessage)
    })
  }

  render() {
    return (
      <div style={styles.base}>
        <header style={styles.pageHeader}>&nbsp;</header>
        <div style={styles.taskListPane}>
          <TaskListHeader
            addTask={this.addTask}
            saveList={this.saveList}
          />

          {this.props.errorMessage &&
            <Message style={{color: 'red'}}>{this.props.errorMessage}</Message>
          }

          <TaskList
            tasks={this.props.tasks}
          />
        </div>
      </div>
    )
  }
}

TaskListApp.propTypes = {
  isDataReady: bool.isRequired,
  errorMessage: string,
  tasks: object,
  taskActions: object.isRequired,
  uiActions: object.isRequired
}

const mapStateToProps = (state) => ({
  isDataReady: state.ui.isDataReady,
  errorMessage: state.ui.errorMessage,
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  uiActions: bindActionCreators(uiActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListApp)
