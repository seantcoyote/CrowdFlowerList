import colors from '../../constants/colors'

export default {
  base: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignContent: 'flex-start',
    minHeight: 300,
    fontFamily: '"Lato", sans-serif',
    backgroundColor: colors.pageBackground
  },
  pageHeader: {
    height: 50,
    backgroundColor: colors.darkBlue
  },
  taskListPane: {
    margin: '0 auto 20px',
    padding: '0 10px',
    width: 590,
    '@media (max-width: 700px)': {
      width: '70%'
    }
  }
}
