import colors from '../../constants/colors'

export default {
  taskListHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: 590,
    marginTop: 10,
    '@media (max-width: 700px)': {
      width: '100%'
    }
  },
  taskListHeaderTitle: {
    fontSize: 24,
    fontWeight: 900,
    color: colors.darkBlue
  },
  taskListHeaderButton: {
    marginLeft: 10,
    color: colors.white,
    fontSize: 12,
    borderRadius: 3
  }
}
