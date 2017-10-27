import colors from '../../constants/colors'

export default {
  taskList: {
    margin: 0,
    padding: 0,
    width: 590,
    listStyleType: 'none',
    color: colors.gray,
    '@media (max-width: 700px)': {
      width: '100%'
    }
  }
}
