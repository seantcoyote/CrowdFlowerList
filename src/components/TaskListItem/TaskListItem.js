import React from 'react'
import styles from './styles'

const TaskListItem = ({task, deleteTaskHandler}) => {
  return (
    <li style={styles.taskListItem}>
      <span>{task.title}</span>
      <i className="fa fa-trash-o fa-lg"
        style={styles.trashIcon}
        aria-hidden="true"
        onClick={deleteTaskHandler}
      />
    </li>
  )
}

export default TaskListItem
