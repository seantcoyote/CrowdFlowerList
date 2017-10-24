import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import colors from '../../constants/colors'
import styles from './styles'

const TaskListHeader = ({addTask, saveList}) => (
  <div style={styles.taskListHeader}>
    <h2 style={styles.taskListHeaderTitle}>Tasks</h2>
    <div>
      <FlatButton
        backgroundColor={colors.gray}
        hoverColor={colors.grayHover}
        onClick={addTask}
        labelStyle={{color: colors.blue}}
        style={styles.taskListHeaderButton}
      >Add Task</FlatButton>
      <FlatButton
        backgroundColor={colors.green}
        hoverColor={colors.greenHover}
        onClick={saveList}
        labelStyle={{color: colors.blue}}
        style={styles.taskListHeaderButton}
      >Save</FlatButton>
    </div>
  </div>
)


export default TaskListHeader
