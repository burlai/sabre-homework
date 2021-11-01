import * as ActionIds from './ActionIds';

export function setLoader() {
  return { type: ActionIds.SET_LOADER }
}

export function clearLoader() {
  return { type: ActionIds.CLEAR_LOADER }
}