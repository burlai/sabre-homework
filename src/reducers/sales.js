import * as ActionIds from '../actions/ActionIds';

export const sales = (state, action) => {
  if (action.type === ActionIds.SALES) {
    return {
      ...state,
      data: action.data,
      filter: action.filter,
      paging: action.paging
    }
  }
  return { ...state }
}