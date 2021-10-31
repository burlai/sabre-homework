import * as ActionIds from 'actions/ActionIds';

export function setLoader() {
  return { type: ActionIds.SET_LOADER }
}

export function clearLoader() {
  return { type: ActionIds.CLEAR_LOADER }
}