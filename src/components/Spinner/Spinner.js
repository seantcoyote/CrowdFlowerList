import React from 'react'
import {object} from 'prop-types'
import defaultStyles from './styles'

const Spinner = ({style}) => (
  <div style={{...defaultStyles.base, ...style}}>
    <i className="fa fa-spinner fa-spin fa-4x"
      style={defaultStyles.spinner}
      aria-hidden="true"
    />
  </div>
)

Spinner.propTypes = {
  style: object
}

export default Spinner
