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
    height: '42px',
    minHeight: '42px',
    backgroundColor: colors.darkBlue
  },
  taskListPane: {
    margin: '0 auto 20px'
  },
  taskListHeader: {
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between'
  },
  taskListHeaderTitle: {
    fontSize: 20,
    fontWeight: 900,
    color: colors.darkBlue
  },
  taskListHeaderButtons: {

  },
  taskList: {
    margin: 0,
    padding: 0
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
    borderRadius: 5,
    fontSize: 9,
    fontWeight: 900,
    letterSpacing: '0.2em',
    listStyleType: 'none',
    textTransform: 'uppercase'
  },
}
