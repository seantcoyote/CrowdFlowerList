import colors from '../../constants/colors'

const text = {
  color: colors.gray,
  fontSize: 11,
  fontWeight: 900,
  letterSpacing: '0.1em',
  textTransform: 'uppercase'
}

export default {
  taskListItem: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: 580,
    height: 105,
    margin: '8px 0',
    padding: '0 15px 10px',
    color: colors.gray,
    backgroundColor: colors.white,
    borderRadius: 3,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',

  },
  textField: {
    marginRight: 30
  },
  title: {
    ...text
  },
  hintText: {
    ...text,
    color: colors.lightGray,
    fontSize: 12,
    fontWeight: 400,
  },
  underline: {
    borderBottom: '0px solid transparent'
  },
  underlineFocused: {
    borderBottom: '1px solid' + colors.lightGray
  }
}
