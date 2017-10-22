import React from 'react'
import TaskListItem from '../TaskListItem'
import colors from '../../constants/colors'
import styles from './styles'

const TaskList = ({tasks}) => {
  const deleteTask = (e) => {
    console.log('task deleted')
  }

  return (
    <ul style={styles.taskList}>
      {Object.keys(tasks).map((taskId) => (
        <TaskListItem
          key={taskId}
          task={tasks[taskId]}
          deleteTaskHandler={deleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
