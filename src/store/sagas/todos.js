import { put, takeLeading, all } from 'redux-saga/effects';

import { FETCH_TODO } from 'store/actions/types';
import { fetchTodoSuccessAction, fetchTodoErrorAction } from 'store/actions/todos';

function* fetchTodoItem() {
  try {
    console.log();
    yield put(fetchTodoSuccessAction());
  } catch (ex) {
    yield put(fetchTodoErrorAction());
  }
}

function* watchFetchTodoItem() {
  yield takeLeading(FETCH_TODO, fetchTodoItem);
}

export default function* rootSaga() {
  yield all([
    watchFetchTodoItem(),
  ]);
}
