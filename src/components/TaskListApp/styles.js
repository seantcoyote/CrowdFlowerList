import colors from '../../constants/colors'

// Mockup dimensions from PDF -
// Task list item: 1234px x 275
// Add Task button: 130 x 60, Save button: 90 x 60

export default {
  base: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    fontFamily: '"Lato", sans-serif',
    backgroundColor: colors.pageBackground
  },
  pageHeader: {
    height: '50px',
    backgroundColor: colors.darkBlue
  },
  taskListPane: {
    margin: '0 auto 20px'
  },
  taskListHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    marginTop: 10
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
  },
  taskList: {
    margin: 0,
    padding: 0,
    listStyleType: 'none'
  },
  taskListItem: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    width: '580px',
    height: '105px',
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
