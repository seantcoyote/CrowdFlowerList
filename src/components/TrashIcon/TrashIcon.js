import React from 'react'
import {object, string, func} from 'prop-types'
import defaultStyles from './styles'

const TrashIcon = ({taskId, deleteTask, style}) => (
  <i
    className="fa fa-trash-o fa-lg"
    id={taskId}
    style={{...defaultStyles.base, ...style}}
    aria-hidden="true"
    onClick={deleteTask}
  />
)

TrashIcon.propTypes = {
  taskId: string.isRequired,
  deleteTask: func.isRequired,
  style: object
}

export default TrashIcon
