import React from 'react'
import TaskListItem from '../TaskListItem'
import styles from './styles'

const TaskList = ({tasks}) => {
  const deleteTask = (e) => {
    console.log('task deleted')
  }

  console.log('tasks:', tasks);

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
