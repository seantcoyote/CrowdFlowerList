import React, { Component } from 'react';
import colors from '../../constants/colors'
import styles from './styles'

class TaskListApp extends Component {

  addTask (e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <div style={styles.base}>
        <header style={styles.pageHeader}>&nbsp;</header>

        <div style={styles.taskListPane}>

          <div style={styles.taskListHeader}>
            <h2 style={styles.taskListHeaderTitle}>Tasks</h2>
            <span>
              <button>Add Task</button>
              <button>Save</button>
            </span>
          </div>

          <ul style={styles.taskList}>
            <li style={styles.taskListItem}>
              <span>Buy Milk</span>
              <i className="fa fa-trash-o fa-2x" aria-hidden="true" />
            </li>
            <li style={styles.taskListItem}>Walk the dog</li>
            <li style={styles.taskListItem}>Task</li>
          </ul>

        </div>
      </div>
    );
  }
}

export default TaskListApp;
