import React from 'react'
import {node, object} from 'prop-types'
import defaultStyles from './styles'

const Message = ({children, style}) => (
  <h2 style={{...defaultStyles.base, ...style}}>{children}</h2>
)

Message.propTypes = {
  children: node,
  style: object
}

export default Message
