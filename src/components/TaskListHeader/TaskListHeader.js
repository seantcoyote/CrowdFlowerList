import React from 'react'
import {func, object} from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import colors from '../../constants/colors'
import defaultStyles from './styles'

const TaskListHeader = ({addTask, saveTasks, style}) => (
  <div style={{...defaultStyles.taskListHeader, ...style}}>
    <h2 style={defaultStyles.taskListHeaderTitle}>Tasks</h2>
    <div>
      <FlatButton
        backgroundColor={colors.gray}
        hoverColor={colors.grayHover}
        onClick={addTask}
        labelStyle={{color: colors.blue}}
        style={defaultStyles.taskListHeaderButton}
      >Add Task</FlatButton>
      <FlatButton
        backgroundColor={colors.green}
        hoverColor={colors.greenHover}
        onClick={saveTasks}
        labelStyle={{color: colors.blue}}
        style={defaultStyles.taskListHeaderButton}
      >Save</FlatButton>
    </div>
  </div>
)

TaskListHeader.propTypes = {
  addTask: func.isRequired,
  saveTasks: func.isRequired,
  style: object
}

export default TaskListHeader
