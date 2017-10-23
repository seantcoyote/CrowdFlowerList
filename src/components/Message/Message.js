import React from 'react'
import styles from './styles'

const Message = ({children, style}) => (
  <h2 style={{...styles.base, ...style}}>{children}</h2>
)

export default Message
