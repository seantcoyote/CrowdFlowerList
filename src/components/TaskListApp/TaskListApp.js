import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton'
import TaskListHeader from '../TaskListHeader'
import TaskList from '../TaskList'
import colors from '../../constants/colors'
import styles from './styles'

import initialState from '../../reducers/initialState'

class TaskListApp extends Component {
  render() {
    return (
      <div style={styles.base}>

        <header style={styles.pageHeader}>&nbsp;</header>

        <div style={styles.taskListPane}>
          <TaskListHeader />
          <TaskList
            tasks={initialState.tasks}
          />
        </div>

      </div>
    )
  }
}

export default TaskListApp
