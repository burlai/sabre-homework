import * as ActionIds from '../actions/ActionIds';

export const loader = (state, action) => {
  if (action.type === ActionIds.SET_LOADER) {
    return {
      ...state,
      data: true
    }
  }
  if (action.type === ActionIds.CLEAR_LOADER) {
    return {
      ...state,
      data: false
    }
  }
  return { ...state }
}