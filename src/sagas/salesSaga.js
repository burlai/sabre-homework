import { put, takeLatest } from "redux-saga/effects";
import axios from 'axios';

import * as ActionIds from '../actions/ActionIds';

function* salesSaga() {
  console.log('salesSaga')
  yield put({ type: ActionIds.SET_LOADER });
  try {
    const response = yield axios.get('https://mocki.io/v1/465b097b-a9a9-4483-bb83-cb67228427dc');
    yield put({
      type: ActionIds.SALES,
      data: response.data
    });
    yield put({ type: ActionIds.CLEAR_LOADER });
  } catch (error) {
    yield put({
      type: ActionIds.FETCH_ERROR,
      error
    });
    yield put({ type: ActionIds.CLEAR_LOADER });
  }
}

export function* salesWatcherSaga() {
  yield [
    takeLatest(ActionIds.SALES_REQ, salesSaga)
  ]
}