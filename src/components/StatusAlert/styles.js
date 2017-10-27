import colors from '../../constants/colors'

export default {
  dialogBody: {
    padding: '10px 15px',
    borderRadius: 3,
    backgroundColor: colors.veryLightGreen
  },
  dialogContentBox: {
    width: '40%',
    position: 'absolute',
    top: 125,
    right: 125,
    border: '1px solid' + colors.green,
    borderRadius: 3,
    backgroundColor: colors.veryLightGreen
  },
  overlay: {
    backgroundColor: 'transparent'
  },
  contentBox: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  close: {
    color: colors.green,
    fontSize: 14
  }
}
