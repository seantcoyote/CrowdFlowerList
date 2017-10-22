import colors from '../../constants/colors'

// Mockup dimensions from PDF -
// Task list item: 1234px x 275
// Add Task button: 130 x 60, Save button: 90 x 60

export default {
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
