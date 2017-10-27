import React from 'react'
import {func, bool} from 'prop-types'
import Dialog from 'material-ui/Dialog'
import {saveErrorMessage, saveSuccessMessage} from '../../constants'
import colors from '../../constants/colors'
import defaultStyles from './styles'

const StatusAlert = ({dataSaved, isAlertOpen, openAlert, closeAlert}) => {
  const alertColor = dataSaved ? colors.green : colors.red

  return (
    <Dialog
      modal={false}
      open={isAlertOpen}
      onRequestClose={closeAlert}
      bodyStyle={defaultStyles.dialogBody}
      contentStyle={{...defaultStyles.dialogContentBox, borderColor: alertColor}}
      overlayStyle={defaultStyles.overlay}
      paperProps={{zDepth: 0}}
    >
      <div style={defaultStyles.contentBox}>
        <span style={{color: alertColor}}>
          {dataSaved ? saveSuccessMessage : saveErrorMessage}
        </span>
        {<i
          className="fa fa-times"
          style={{...defaultStyles.close, color: alertColor}}
          aria-hidden="true"
          onClick={closeAlert}
        />}
      </div>
    </Dialog>
  )
}

StatusAlert.propTypes = {
  dataSaved: bool.isRequired,
  isAlertOpen: bool.isRequired,
  openAlert: func.isRequired,
  closeAlert: func.isRequired
}

export default StatusAlert
