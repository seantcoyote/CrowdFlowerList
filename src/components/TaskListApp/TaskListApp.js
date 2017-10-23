import React, { Component } from 'react'
import {object, bool} from 'prop-types'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as uiActions from '../../actions/uiActions'
import * as taskActions from '../../actions/taskActions'
import uuidV4 from 'uuid/v4'
import TaskListHeader from '../TaskListHeader'
import TaskList from '../TaskList'
import Message from '../Message'
import {loadingErrorMessage} from '../../constants'
import styles from './styles'

class TaskListApp extends Component {
  componentWillMount () {
    this.props.taskActions.loadTasks().then(() => {
      this.props.uiActions.setDataLoadingError(false)
      this.props.uiActions.setIsDataReady(true)
    }).catch((err) => {
      this.props.uiActions.setDataLoadingError(true)
    })
  }

  addTask = () => {
    const newTask = {
      id: uuidV4(),
      title: 'test task'
    }
    console.log('addTask:', newTask)
  }

  saveList = () => {
    console.log('saveList:', uuidV4())
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

          {this.props.loadingError &&
            <Message style={{color: 'red'}}>{loadingErrorMessage}</Message>
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
  loadingError: bool,
  tasks: object,
  taskActions: object.isRequired,
  uiActions: object.isRequired
}

const mapStateToProps = (state) => ({
  isDataReady: state.ui.isDataReady,
  loadingError: state.ui.loadingError,
  tasks: state.tasks
})

const mapDispatchToProps = (dispatch) => ({
  taskActions: bindActionCreators(taskActions, dispatch),
  uiActions: bindActionCreators(uiActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(TaskListApp)
