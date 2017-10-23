import React from 'react'
import TaskListItem from '../TaskListItem'
import Message from '../Message'
import styles from './styles'

const TaskList = ({tasks}) => {
  const deleteTask = (e) => {
    console.log('task deleted')
  }

  console.log('tasks:', tasks);

  return (
    <ul style={styles.taskList}>
      {!tasks &&
        <Message>Add a task to get started!</Message>
      }

      {tasks && Object.keys(tasks).map((taskId) => (
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
