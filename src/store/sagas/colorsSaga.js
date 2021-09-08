import { put, takeEvery, all, call } from 'redux-saga/effects';

import { FETCH_RANDOM_COLOR } from 'store/actions/types';
import { fetchColorSuccessAction, fetchColorErrorAction } from 'store/actions/colors';
import { get } from 'lib/httpService';

function* fetchColor(action) {
  let testApiRequestUrl = `https://reqres.in/api/unknown/${action.payload}`;
  if (action.options.delay) testApiRequestUrl += `?delay=${action.options.delay}`;

  try {
    const result = yield call(get, testApiRequestUrl);
    yield put(fetchColorSuccessAction(result.data.data));
  } catch (ex) {
    yield put(fetchColorErrorAction(action.payload, ex));
  }
}

function* watchFetchColor() {
  yield takeEvery(FETCH_RANDOM_COLOR, fetchColor);
}

export default function* colorsSaga() {
  yield all([
    watchFetchColor(),
  ]);
}
