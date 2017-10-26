import * as types from './actionTypes'
import * as actions from './uiActions'

describe('uiActions', () => {
  test('setNumberOfAjaxCalls creates an SET_NUMBER_OF_AJAX_CALLS action', () => {
    expect(actions.setNumberOfAjaxCalls(true)).toEqual({
      type: types.SET_NUMBER_OF_AJAX_CALLS,
      payload: true
    })
  })
})
