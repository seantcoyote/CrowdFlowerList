import React from 'react'
import {object, array, func} from 'prop-types'
import TaskListItem from '../TaskListItem'
import defaultStyles from './styles'

const TaskList = ({tasks, taskIds, updateTask, deleteTask, cleanTasks, style}) => (
  <ul style={{...defaultStyles.taskList, ...style}}>
    {taskIds.map((taskId) => (
        <TaskListItem
          key={taskId}
          task={tasks[taskId]}
          updateTask={updateTask}
          deleteTask={deleteTask}
          cleanTasks={cleanTasks}
        />
      ))
    }
  </ul>
)

TaskList.propTypes = {
  tasks: object.isRequired,
  taskIds: array.isRequired,
  updateTask: func.isRequired,
  deleteTask: func.isRequired,
  cleanTasks: func.isRequired,
  style: object
}

export default TaskList
