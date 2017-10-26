import React from 'react'
import {object, func} from 'prop-types'
import TextField from 'material-ui/TextField'
import TrashIcon from '../TrashIcon'
import defaultStyles from './styles'

const TaskListItem = ({task, updateTask, deleteTask, cleanTasks, style}) => (
    <li style={{...defaultStyles.taskListItem, ...style}}>
      <TextField
        id={task.id}
        value={task.title}
        hintText="New Task"
        fullWidth={true}
        multiLine={true}
        rows={1}
        rowsMax={3}
        style={defaultStyles.textField}
        hintStyle={defaultStyles.hintText}
        textareaStyle={defaultStyles.title}
        underlineStyle={defaultStyles.underline}
        underlineFocusStyle={defaultStyles.underlineFocused}
        onChange={updateTask}
        onBlur={cleanTasks}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {e.target.blur()} // Blur focus instead of carriage return
          if (e.key === 'Escape') {e.target.blur()}
        }}
      />
      <TrashIcon taskId={task.id} deleteTask={deleteTask} />
    </li>
)

TaskListItem.propTypes = {
  task: object.isRequired,
  updateTask: func.isRequired,
  deleteTask: func.isRequired,
  cleanTasks: func.isRequired,
  style: object
}

export default TaskListItem
