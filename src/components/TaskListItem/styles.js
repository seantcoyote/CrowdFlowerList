import colors from '../../constants/colors'

export default {
  taskListItem: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: 580,
    height: 105,
    margin: '8px 0',
    padding: '10px 15px',
    color: colors.gray,
    backgroundColor: colors.white,
    borderRadius: 3,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px',
    fontSize: 11,
    fontWeight: 900,
    letterSpacing: '0.2em',
    textTransform: 'uppercase'
  },
  trashIcon: {
    fontSize: 16
  }
}
