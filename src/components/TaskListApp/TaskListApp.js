import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton'
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import colors from '../../constants/colors'
import styles from './styles'

class TaskListApp extends Component {

  addTask = (e) => {
    console.log(e.target.value)
  }

  saveList = (e) => {
    console.log(e.target.value)
  }

  render() {
    return (
      <div style={styles.base}>
        <header style={styles.pageHeader}>&nbsp;</header>

        <div style={styles.taskListPane}>

          <div style={styles.taskListHeader}>
            <h2 style={styles.taskListHeaderTitle}>Tasks</h2>
            <div>
              <FlatButton
                backgroundColor={colors.gray}
                hoverColor={colors.white}
                onClick={this.addTask}
                labelStyle={{color: colors.blue}}
                style={styles.taskListHeaderButton}
              >Add Task</FlatButton>
              <FlatButton
                backgroundColor={colors.green}
                hoverColor={colors.white}
                onClick={this.saveList}
                labelStyle={{color: colors.blue}}
                style={styles.taskListHeaderButton}
              >Save</FlatButton>
            </div>
          </div>

          <ul style={styles.taskList}>
            <li style={styles.taskListItem}>
              <span>Buy Milk</span>
              <i className="fa fa-trash-o fa-lg" aria-hidden="true" />
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
