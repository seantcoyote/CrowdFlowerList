import colors from '../../constants/colors'

export default {
  base: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    fontFamily: '"Lato", sans-serif',
    backgroundColor: colors.pageBackground
  },
  pageHeader: {
    height: 50,
    backgroundColor: colors.darkBlue
  },
  taskListPane: {
    margin: '0 auto 20px'
  }
}
